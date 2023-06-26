import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const basicSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  guests: yup
    .number()
    .min(1, "Must be more than 1")
    .positive()
    .integer()
    .required("required"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
