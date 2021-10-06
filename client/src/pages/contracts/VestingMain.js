import VestingGive from "./vesting/VestingGive";

import VestingGrab from "./vesting/VestingGrab";


const VestingMain = () => {
  return (
    <div>
      <div className="flex flex-col items-center flex-wrap bg-gray-400 h-screen">
        <div className="flex flex-col m-4 justify-center items-center h-screen w-1/2 ">
          <VestingGive />
          {/* <VestingInfoGive /> */}
        </div>

        <div className="flex flex-row m-4 justify-center items-center h-screen w-1/2 ">
          <VestingGrab/>
        </div>
        {/* <Counter className="text-4xl text-light-gray"/> */}
      </div>
    </div>
  );
};

export default VestingMain;
