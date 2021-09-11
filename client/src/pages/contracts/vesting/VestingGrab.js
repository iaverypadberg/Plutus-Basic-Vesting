import { useState } from "react";
import { useAtom, atom } from "jotai"

export const contractStateGrab = atom({status:"",timewaiting:'0 seconds', amount:'0'})
const VestingGrab = () => {

const [grabContractState,setGrabContractState] = useAtom(contractStateGrab)
const updateState = () =>{
  setGrabContractState({success:"Waiting", timewaiting:`10 Seconds`, amount:`200`})
}
  return (
    <div className="flex flex-col justify-center items-center h-52 w-64 rounded-lg bg-blue-200">
      <button
        type="submit"
        className="rounded-md p-2 bg-blue-300 hover:bg-blue-400 hover:cursor-pointer text-light-gray"
        onClick={updateState}
      >
        Grab that ada!!
      </button>
    </div>
  );
};

export default VestingGrab;
