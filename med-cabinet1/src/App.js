import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import "./App.css";
import * as yup from "yup";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import formSchema from "./components/formSchema";
import formSchemaRegistration from "./components/formSchemaRegistration";
import Registration from "./components/Registration";
import { ProtectedRoute } from "./components/assets/ProtectedRoute";
import { TEST } from "./components/TEST_LOGIN";
import Questionnaire from "./components/questionnaire";
import Browse from "./components/Browse";
import { postNewUser } from "./actions/registerAction";

// const initialLoginData = {
//   username: "",
//   usernameLogin: "",
//   password: "",
//   passwordLogin: "",
//   location: "",
//   med_condition: null,
//   age: "",
//   experienced: null,
//   tos: "",
//   questionnaire: {
//     symptoms: {
//       pain: false, //includes headaches and cramps
//       depression: false,
//       insomnia: false,
//       stress: false,
//       lackOfAppetite: false,
//       nausea: false,
//       fatigue: false,
//       muscleSpasm: false,
//       eyePressure: false,
//       inflammation: false,
//       seizures: false,
//       other: false,
//     },
//     race: {
//       race1: false,
//       race2: false,
//       race3: false,
//       race4: false,
//     },
//     flavor: {
//       earthy: false,
//       spicy: false, // should include peppery
//       herbal: false, // should include flowery
//       citrus: false, // should include orange, lemon, tropical
//       sweet: false, // should include berry, fruity
//       pine: false, // should include woody
//       pungent: false, // should include chemicalm ammonia, deisel, skunky, cheese
//       nutty: false,
//       minty: false,
//     }
//   }
// };

const initialFormData = {
  username: "",
  usernameLogin: "",
  password: "",
  passwordLogin: "",
  location: "",
  med_condition: null,
  age: "",
  experienced: null,
  tos: "",
  questionnaire: {
    symptoms: {
      pain: false, //includes headaches and cramps
      depression: false,
      insomnia: false,
      stress: false,
      lackOfAppetite: false,
      nausea: false,
      fatigue: false,
      muscleSpasm: false,
      eyePressure: false,
      inflammation: false,
      seizures: false,
      other: false,
    },
    race: {
      race1: false,
      race2: false,
      race3: false,
      race4: false,
    },
    flavor: {
      earthy: false,
      spicy: false, // should include peppery
      herbal: false, // should include flowery
      citrus: false, // should include orange, lemon, tropical
      sweet: false, // should include berry, fruity
      pine: false, // should include woody
      pungent: false, // should include chemicalm ammonia, deisel, skunky, cheese
      nutty: false,
      minty: false,
    }
  }
};

const initialFormErrors = {
  username: "",
  password: "",
  location: "",
  med_condition: null,
  age: "",
  experienced: null,
  tos: ""
};


// const initialUserProfile = { // ARE WE GOING TO USE THIS OR DO YOU HAVE A PROFILE STATE?
//   symptoms: {
//     pain: false, //includes headaches and cramps
//     depression: false,
//     insomnia: false,
//     stress: false,
//     lackOfAppetite: false,
//     nausea: false,
//     fatigue: false,
//     muscleSpasm: false,
//     eyePressure: false,
//     inflammation: false,
//     seizures: false,
//     other: false,
//   },
//   race: {
//     indica: false,
//     sativa: false,
//     hybrid: false,
//   },
//   flavor: {
//     earthy: false,
//     spicy: false, // should include peppery
//     herbal: false, // should include flowery
//     citrus: false, // should include orange, lemon, tropical
//     sweet: false, // should include berry, fruity
//     pine: false, // should include woody
//     pungent: false, // should include chemicalm ammonia, deisel, skunky, cheese
//     nutty: false,
//     minty: false,
//   },
// };

const initialDisabled = true;

function App() {
  // const [loginData, setloginData] = useState(initialLoginData);
  const [formData, setformData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [disabled2, setDisabled2] = useState(initialDisabled)
  // const [userProfile, setuserProfile] = useState(initialUserProfile);
  const [activeTab, setActiveTab] = useState("1");
  const { push } = useHistory();

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      setDisabled(!valid);
    });
    formSchemaRegistration.isValid(formData).then((valid) => {
      setDisabled2(!valid);
    });
  }, [formData]);

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const onInputChangeRegistration = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    yup
      .reach(formSchemaRegistration, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const onCheckboxChange = (evt) => {
    const { name } = evt.target;
    const { checked } = evt.target;
    setformData({
      ...formData,
      [name]: checked,
    });
  };

  const onSymptomsCheckboxChange = (evt) => {
    const { name } = evt.target;
    const { checked } = evt.target;
    setformData({
      ...formData,
      questionnaire: {
        ...formData.questionnaire,
        symptoms: {
          ...formData.questionnaire.symptoms,
          [name]: checked,
        },
      },
    });
  };

  const onRaceRadioChange = (evt) => {
    const { name } = evt.target;
    const { value } = evt.target;
    setformData({
      ...formData,
      questionnaire: {
        ...formData.questionnaire,
        race: {
          ...formData.questionnaire.race,
          [name]: value,
        },
      },
    });
  };

  const onFlavorCheckboxChange = (evt) => {
    const { name } = evt.target;
    const { checked } = evt.target;
    setformData({
      ...formData,
      questionnaire: {
        ...formData.questionnaire,
        flavor: {
          ...formData.questionnaire.flavor,
          [name]: checked,
        },
      },
    });
  };

  const sendData = (loginData) => {
    axios
      .post("https://med-cabinet1.herokuapp.com/api/users/login?", loginData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        push("/Protected");
        // debugger;
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  const loginSubmit = (event) => {
    event.preventDefault();

    const loginDatas = {
      username: formData.username,
      password: formData.password,
    };

    sendData(loginDatas);
  };

  const submitHandle = (e) => { //please adjust as needed
    e.preventDefault();         //
    debugger
    postNewUser(formData);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Switch>
          <Route exact path={`/`}>
            <Home></Home>
          </Route>
          <Route path={`/Browse`}>
            <Browse></Browse>
          </Route>
          <Route path={`/Questionnaire`}>
            <Questionnaire
              values={formData}
              errors={formErrors}
              onInputChange={onInputChange}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onSymptomsCheckboxChange={onSymptomsCheckboxChange}
              onRaceRadioChange={onRaceRadioChange}
              onFlavorCheckboxChange={onFlavorCheckboxChange}
            ></Questionnaire>
          </Route>
          <Route path={"/Login"}>
            <Login
              loginSubmit={loginSubmit}
              onInputChange={onInputChange}
              errors={formErrors}
              disabled={disabled}
            ></Login>
          </Route>
          <Route path="/Registration">
            <Registration
            values={formData} 
            onInputChange={onInputChangeRegistration}
            errors={formErrors}
            disabled={disabled2}
            submitHandle={submitHandle}
            onCheckboxChange={onCheckboxChange}/>
          </Route>
          <ProtectedRoute path="/Protected" component={TEST} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
