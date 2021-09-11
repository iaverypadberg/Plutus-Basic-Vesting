import VestingGive from "./vesting/VestingGive";
import VestingInfoGive from "./vesting/VestingInfoGive";
import VestingGrab from "./vesting/VestingGrab";
import VestingInfoGrab from "./vesting/VestingInfoGrab"

const VestingMain = () => {
  return (
    <div>
      <div className="flex flex-col items-left bg-gray-400 h-screen">
        <div className="flex flex-row m-4 justify-around items-center rounded-lg h-1/2 w-1/2 bg-gray-600">
          <VestingGive />
          <VestingInfoGive />
        </div>

        <div className="flex flex-row m-4 justify-around items-center rounded-lg h-1/3 w-1/2 bg-gray-600">
          <VestingGrab/>
          <VestingInfoGrab/>
        </div>
      </div>
    </div>
  );
};

export default VestingMain;
