import * as yup from "yup";

const formSchema = yup.object().shape({
  usernameLogin: yup.string()
    .required("The username is a required field"),
  passwordLogin: yup.string()
    .required("Password is a required field"),
});

export default formSchema;
