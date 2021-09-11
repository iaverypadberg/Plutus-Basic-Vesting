import { useState } from "react";
import { useAtom, atom } from "jotai"
import { contractStateGive } from "./VestingGive";

const VestingInfoGive = () => {
  const [giveContractState,setGiveContractState] = useAtom(contractStateGive)
  return (
    <div className="flex flex-col items-center justify-center h-60 w-96 bg-blue-200 rounded-lg">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <label htmlFor="status">Status</label>
          <p id="status" className="ml-3">{giveContractState.status}</p>
        </div>

        <div className="flex flex-row">
          <label htmlFor="time">Time waited</label>
          <p id="time" className="ml-3">{giveContractState.time}</p>
        </div>

        {/* <div className="flex flex-row">
          <label htmlFor="status">Ada Grabbed</label>
          <p id="status" className="ml-3">Waiting</p>
        </div> */}

      </div>
    </div>
  );
};

export default VestingInfoGive;
