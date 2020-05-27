import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import * as yup from "yup";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home"
import formSchema from "./components/formSchema";
import Registration from "./components/Registration";
import Questionnaire from "./components/Questionnaire";
import Browse from "./components/Browse"

const initialLoginData = {
  email: "",
  password: "",
};

const initialFormData = {
  name: "",
  email: "",
  password: "",
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
    other: false
  },
  race: {
    race1: false,
    race2: false,
    race3: false,
    race4: false
  },
  flavor: {
    earthy: false, 
    spicy: false,  // should include peppery
    herbal: false, // should include flowery
    citrus: false, // should include orange, lemon, tropical
    sweet: false,  // should include berry, fruity
    pine: false,   // should include woody
    pungent: false,// should include chemicalm ammonia, deisel, skunky, cheese
    nutty: false,
    minty: false
  }
  }
};


const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  // role: "",
  // tos: "",
};

const initialUserProfile = {
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
    other: false
  },
  race: {
    indica: false,
    sativa: false,
    hybrid: false
  },
  flavor: {
    earthy: false, 
    spicy: false,  // should include peppery
    herbal: false, // should include flowery
    citrus: false, // should include orange, lemon, tropical
    sweet: false,  // should include berry, fruity
    pine: false,   // should include woody
    pungent: false,// should include chemicalm ammonia, deisel, skunky, cheese
    nutty: false,
    minty: false
  }
}

const initialDisabled = true;

function App() {
  const [loginData, setloginData] = useState(initialLoginData);
  const [formData, setformData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [userProfile, setuserProfile] = useState(initialUserProfile);
  const [activeTab, setActiveTab] = useState('1');

  useEffect(() => {
    formSchema.isValid(loginData).then((valid) => {
      setDisabled(!valid);
    });
  }, [loginData]);

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
    setloginData({
      ...loginData,
      [name]: value})
  }

  const onSymptomsCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setformData({
      ...formData,
      questionnaire: {
        ...formData.questionnaire,
        symptoms: {
          ...formData.questionnaire.symptoms, 
          [name]: checked, 
        }
      }
    })
  }

  const onRaceRadioChange = evt => {
    const { name } = evt.target
    const { value } = evt.target
    setformData({
      ...formData,
      questionnaire: {
        ...formData.questionnaire,
        race: {
          ...formData.questionnaire.race, 
          [name]: value, 
        }
      }
    })
  }

  const onFlavorCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setformData({
      ...formData,
      questionnaire: {
        ...formData.questionnaire,
        flavor: {
          ...formData.questionnaire.flavor, 
          [name]: checked, 
        }
      }
    })
  }

  const sendData = loginData => {
    axios.post("https://med-cabinet1.herokuapp.com/api/users/login?", loginData)
    .then(data => {
      console.log(data);
      debugger
    })
    .catch(err => {
      console.log(err);
      debugger
    })
  }

  const loginSubmit = (event) => {
    event.preventDefault();

    const loginDatas = {
      username: loginData.email,
      password: loginData.password,
    };

    sendData(loginDatas);
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
            <Registration />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
