import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { EmployeeFormContainer, InputContainer } from "./styles";
import { EMPLOYEE_FORM_NAMES } from "./types";

function EmployeeForm() {
  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.NAME]: Yup.string()
      .required("Name is required")
      .min(2, "Name must contain at least 2 characters​")
      .max(50, "Name length exceeds 50 characters"),
    [EMPLOYEE_FORM_NAMES.SURNAME]: Yup.string()
      .required("Surmame is required")
      .max(15, "Name length exceeds 15 characters"),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.string()
      .required("Age is required")
      .min(1, "Age is required")
      .max(3, "Age exceeds 3 characters"),
    [EMPLOYEE_FORM_NAMES.JOBPOSITION]: Yup.string().max(
      30,
      "Job position name exceeds 30 characters"
    ),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.NAME]: "",
      [EMPLOYEE_FORM_NAMES.SURNAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.JOBPOSITION]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Input
          id="firstName"
          name={EMPLOYEE_FORM_NAMES.NAME}
          placeholder="Enter your name"
          label="Name*"
          value={formik.values[EMPLOYEE_FORM_NAMES.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.NAME]}
        />
        <Input
          id="lastName"
          name={EMPLOYEE_FORM_NAMES.SURNAME}
          placeholder="Enter your surname"
          label="Surname*"
          value={formik.values[EMPLOYEE_FORM_NAMES.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.SURNAME]}
        />
        <Input
          id="age"
          name={EMPLOYEE_FORM_NAMES.AGE}
          placeholder="Enter your age"
          label="Age*"
          value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
        />
        <Input
          id="jobPosition"
          name={EMPLOYEE_FORM_NAMES.JOBPOSITION}
          placeholder="Enter your job position"
          label="Job Position"
          value={formik.values[EMPLOYEE_FORM_NAMES.JOBPOSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.JOBPOSITION]}
        />
      </InputContainer>
      <Button type="submit" name="Create" />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
