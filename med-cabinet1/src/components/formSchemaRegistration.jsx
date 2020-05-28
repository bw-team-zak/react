import * as yup from "yup";

const formSchemaRegistration = yup.object().shape({
  username: yup.string()
    .trim()
    .min(4, "Your username must be at least 4 characters")
    .required("The username is a required field"),
  password: yup.string()
    .min(6, "Your password must be at least 6 characters")
    .required("Password is a required field"),
  location: yup.string()
    .required("Location is a required field"),
  age: yup.number()
    .required("Age is a required field"),
  experienced: yup.string()
    .required("Experience is a required field"),
  tos: yup.string()
    .required("You musst agree to the tos")
});

export default formSchemaRegistration;
