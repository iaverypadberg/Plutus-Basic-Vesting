import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useAtom, atom } from "jotai"

export const contractStateGive = atom({status:"",time:'0 seconds'})

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

const VestingGive = () => {
  const [giveContractState,setGiveContractState] = useAtom(contractStateGive)


  return (
    <Formik
      initialValues={{
        beneficiary: "",
        amount: "",
        deadline: "",
      }}
      validationSchema={VestingSchema}
      onSubmit={(values) => {
        setGiveContractState({status:"Waiting", time:"4 seconds"})
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="flex flex-col justify-center items-center h-80 w-96 rounded-lg bg-blue-200">
          <Form className="flex flex-col justify-center items-center">
            <h1 className="text-lg text-light-gray m-2">Vesting Give</h1>
            <Field
              className="border-2 m-1"
              placeholder="beneficiary(hex)"
              name="beneficiary"
            />

            {/* {errors.beneficiary && touched.beneficiary ? (
            <div>{errors.beneficiary}</div>
          ) : null} */}

            <Field className="border-2 m-1" placeholder="amount(int)" name="amount" />

            {/* {errors.amount && touched.amount ? <div>{errors.amount}</div> : null} */}

            <Field
              className="border-2 m-1"
              placeholder="deadline(int)"
              name="deadline"
            />

            {/* {errors.deadline && touched.deadline ? (
            <div>{errors.deadline}</div>
          ) : null} */}

            <button type="submit" className="rounded-md p-2 bg-blue-300 hover:bg-blue-400 hover:cursor-pointer text-light-gray">Submit</button>
          </Form>
        </div>
      )}
    </Formik>
)};

export default VestingGive;