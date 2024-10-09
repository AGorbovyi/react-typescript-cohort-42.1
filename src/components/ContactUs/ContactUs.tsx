import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { ContactUsFormContainer, Title, InputsContainer } from "./styles";

function ContactUs() {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full name is required")
      .min(3, "Name must contain at least 3 characters​")
      .max(50, "Name length exceeds 50 characters"),
    phone: Yup.string()
      .required("Phone number is required")
      .min(4, "Phone number must contain at least 4 digits")
      .max(20, "Phone number length exceeds 20 digits"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .min(6, "The minimum email must contain 6 characters​")
      .max(60, "Email length exceeds 60 characters"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log(values);
    },
  });

  return (
    <ContactUsFormContainer onSubmit={formik.handleSubmit}>
      <Title>Contact Us</Title>
      <InputsContainer>
        <Input
          id="fullName"
          name="fullName"
          label="fullName"
          placeholder="Enter your full name"
          error={formik.errors.fullName}
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        <Input
          id="phone"
          name="phone"
          label="phone"
          placeholder="Enter your phone number"
          error={formik.errors.phone}
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <Input
          id="email"
          name="email"
          label="email"
          placeholder="Enter your email"
          error={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </InputsContainer>
      <Button type="submit" name="contactFrom" />
    </ContactUsFormContainer>
  );
}

export default ContactUs;
