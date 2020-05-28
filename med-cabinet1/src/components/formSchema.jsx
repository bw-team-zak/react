import * as yup from "yup";

const formSchema = yup.object().shape({
  // name: yup.string()
  //   .trim()
  //   .min(2, "Your name must be at least two characters long")
  //   .required("The name is a required field"),
  username: yup.string().required("The username is a required field"),
  password: yup
    .string()
    .min(6, "Your password must be at least 6 characters")
    .required("Password is a required field"),
  race1: yup.string(),
  race2: yup.string(),
  race3: yup.string(),
  race4: yup.string(),
});

export default formSchema;
