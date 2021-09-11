import { useState } from "react";
import { useAtom, atom } from "jotai"
import { contractStateGrab } from "./VestingGrab"

const VestingInfoGrab = () => {
    const [grabContractState,setGrabContractState] = useAtom(contractStateGrab)
    return (
      <div className="flex flex-col items-center justify-center h-60 w-96 bg-blue-200 rounded-lg">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <label htmlFor="status">Status</label>
            <p id="status" className="ml-3">{grabContractState.status}</p>
          </div>
  
          <div className="flex flex-row">
            <label htmlFor="time">Time Spent</label>
            <p id="time" className="ml-3">{grabContractState.timewaiting}</p>
          </div>
  
          <div className="flex flex-row">
            <label htmlFor="status">Ada Grabbed</label>
            <p id="status" className="ml-3" >{grabContractState.amount}</p>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default VestingInfoGrab;
  