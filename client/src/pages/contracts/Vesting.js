import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";

const VestingSchema = Yup.object().shape({
  beneficiary: Yup.number().required().positive(),

  amount: Yup.number()
    .required("Required")
    .min(1, "More lovelace needed!!")
    .max(100, "Too much lovelace!!!")
    .integer(),

  deadline: Yup.number()
    .required("Required")
    .min(1, "Deadline cannot be in the past!!!")
    .max(200, "Deadline will never reach :/ !!!")
    .integer(),
});

export const Vesting = () => (
  <div className="flex flex-row justify-center items-center bg-gray-300 h-screen">
      <div className="">
    <h1>Vesting Contract</h1>

    <Formik
      initialValues={{
        beneficiary: "",
        amount: "",
        deadline: "",
      }}
      validationSchema={VestingSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >

      {({ errors, touched }) => (
        <Form>

          <Field className="border-2" placeholder= "beneficiary" name="beneficiary" />

          {errors.beneficiary && touched.beneficiary ? (
            <div>{errors.beneficiary}</div>
          ) : null}

          <Field  className="border-2" placeholder="amount" name="amount" />

          {errors.amount && touched.amount ? <div>{errors.amount}</div> : null}

          <Field className="border-2" placeholder= "deadline"name="deadline" />

          {errors.deadline && touched.deadline ? (
            <div>{errors.deadline}</div>
          ) : null}

          <button type="submit">Submit</button>
        </Form>
        
      )}
    </Formik>
    </div>
  </div>
);
