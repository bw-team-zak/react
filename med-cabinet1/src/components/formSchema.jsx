import * as yup from "yup"

const formSchema = yup.object().shape({
    // name: yup.string()
    //   .trim()
    //   .min(2, "Your name must be at least two characters long")
    //   .required("The name is a required field"),
    email: yup.string()
      .email("The email must be a valid email address")
      .required("The email is a required field"),
    password: yup.string()
      .min(8, "Your password must be at least 10 characters")
      .required("Password is a required field")
  })

  export default formSchema