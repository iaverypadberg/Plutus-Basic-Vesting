import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import CounterGive from "../../../utils/CounterGive";

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
  const contractStateGive = { status: "Idle" };
  const [giveContractState, setGiveContractState] = useState(contractStateGive);

  return (
    <Formik
      initialValues={{
        beneficiary: "",
        amount: "",
        deadline: "",
      }}
      validationSchema={VestingSchema}
      onSubmit={(values) => {
        setGiveContractState({ status: "waiting" });
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="flex flex-col justify-center items-center h-5/6 w-3/5 rounded-lg bg-blue-300">
          <h1 className="text-lg text-light-gray m-4 font-bold">
              Vesting Give
            </h1>
          <Form className="flex flex-col justify-center m-3 items-center bg-blue-100 h-2/5 w-3/4 rounded-lg">
            
            <Field
              className="m-1 bg-light-gray"
              placeholder="beneficiary(hex)"
              name="beneficiary"
            />

            {/* {errors.beneficiary && touched.beneficiary ? (
            <div>{errors.beneficiary}</div>
          ) : null} */}

            <Field
              className="m-1 select-none bg-light-gray"
              placeholder="amount(int)"
              name="amount"
            />

            {/* {errors.amount && touched.amount ? <div>{errors.amount}</div> : null} */}

            <Field
              className="m-1 bg-light-gray"
              placeholder="deadline(int)"
              name="deadline"
            />

            {/* {errors.deadline && touched.deadline ? (
            <div>{errors.deadline}</div>
          ) : null} */}

            <button
              type="submit"
              className="rounded-md m-2 p-2 bg-blue-400 hover:bg-blue-500 hover:cursor-pointer text-light-gray"
            >
              Submit
            </button>
          </Form>

          <div className="flex flex-col m-3 items-center justify-center h-2/5 w-3/4 bg-blue-100 rounded-lg">
            <div className="flex flex-col items-center justify-center h-2/5 w-3/4">
              {/* <div className="flex flex-row justify-center items-center m-3 text-lg rounded-lg  h-1/4 w-">
                <label htmlFor="status">Transaction Status</label>
              </div> */}

              <h1 className="text-lg text-light-gray m-4 font-bold">
                Transaction Status
              </h1>

              <div className="flex flex-row justify-center items-center m-3 bg-light-gray rounded-lg  h-1/4 w-1/2">
                <p id="status" className="ml-3 ">
                  {giveContractState.status}
                </p>
              </div>

              <div className="flex flex-row justify-center items-center m-3 bg-light-gray rounded-lg  h-1/4 w-1/2">
                <label htmlFor="time" className="mr-3">
                  Time waited
                </label>
                {giveContractState.status === "waiting" ? <CounterGive /> : 0}
              </div>
            </div>
          </div>

          <div className="flex flex-col m-3 items-center justify-center h-2/5 w-3/4 bg-blue-100 rounded-lg">
            <table className="table-auto border-solid border-4 border-blue-400">
              <tbody>
                <tr className="border-solid border-2 border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <td>Success</td>
                </tr>
                <tr className="border-solid border-2 border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TransactionId
                  </th>
                  <td>32839293879283798</td>
                </tr>
                <tr className="border-solid border-2 border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ADA Sent
                  </th>
                  <td>200</td>
                </tr>
                <tr className="border-solid border-2 border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time Waited
                  </th>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default VestingGive;
