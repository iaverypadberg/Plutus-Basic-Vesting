import { Component, useState } from "react";
import CounterGrab from "../../../utils/CounterGrab";

const VestingGrab = () => {
  const contractStateGrab = { status: "Idle" };
  const [grabContractState, setGrabContractState] = useState(contractStateGrab);

  const updateState = () => {
    setGrabContractState({ status: "Waiting" });
  };
  return (
    <div className="flex flex-col justify-center items-center h-5/6 w-2/4 rounded-lg bg-blue-300">
      <h1 className="text-lg text-light-gray m-4 font-bold">Vesting Grab</h1>
      <div className="flex flex-col m-3 items-center justify-center h-1/5 w-3/4 bg-blue-100 rounded-lg">
        <button
          className="rounded-md p-2 bg-blue-300 hover:bg-blue-400 hover:cursor-pointer text-light-gray"
          onClick={updateState}
        >
          Grab that ada!!
        </button>
      </div>

      <div className="flex flex-col m-3 items-center justify-center h-2/5 w-3/4 bg-blue-100 rounded-lg">
        <div className="flex flex-col items-center justify-center h-2/5 w-3/4">
          <h1 className="text-lg text-light-gray m-1 font-bold">
            Transaction Status
          </h1>
          <div className="flex flex-row justify-center items-center m-3 bg-light-gray rounded-lg  h-1/4 w-1/2">
            <label htmlFor="status">Status</label>
            <p id="status" className="ml-3 text-light-gray">
              {grabContractState.status}
            </p>
          </div>

          <div className="flex flex-row justify-center items-center m-3 bg-light-gray rounded-lg  h-1/4 w-1/2">
            <label htmlFor="time">Time waited</label>
            {grabContractState.status === "Waiting" ? <CounterGrab /> : 0}
          </div>

          <div className="flex flex-row justify-center items-center m-3 bg-light-gray rounded-lg  h-1/4 w-1/2">
            <label htmlFor="status">Ada Grabbed</label>
            <p id="status" className="ml-3 text-light-gray">
              {grabContractState.amount}
            </p>
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
                Name
              </th>
              <td>Isaac</td>
            </tr>
            <tr className="border-solid border-2 border-blue-400">
              <th
                scope="row"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Shit Type
              </th>
              <td>Bad</td>
            </tr>
            <tr className="border-solid border-2 border-blue-400">
              <th
                scope="row"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                City
              </th>
              <td>Montyp</td>
            </tr>
            <tr className="border-solid border-2 border-blue-400">
              <th
                scope="row"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <td>Isaac</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VestingGrab;
