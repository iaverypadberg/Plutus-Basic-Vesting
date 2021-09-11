import { VestingGive } from "./VestingGive";
import VestingInfo from "./VestingInfo";
import VestingGrab from "./VestingGrab";

const VestingMain = () => {
  return (
    <div>
      <div className="flex flex-col items-left bg-gray-400 h-screen">
        <div className="flex flex-row m-4 justify-around items-center rounded-lg h-1/2 w-1/2 bg-gray-600">
          <VestingGive />
          <VestingInfo />
        </div>

        <div className="flex flex-row m-4 justify-around items-center rounded-lg h-1/3 w-1/2 bg-gray-600">
          <VestingGrab/>
          <VestingInfo/>
        </div>
      </div>
    </div>
  );
};

export default VestingMain;
