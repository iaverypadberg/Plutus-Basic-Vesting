
import { useCountUp } from "react-countup";

const CounterGive = () => {
  const {start} = useCountUp({
    ref: "counterone",
    start: 0,
    // startOnMount: false,
    duration: 200,
    end: 200,
  });
  return (
    <div className="ml-2 text-md ">
      <span id="counterone" />
    </div>

  );
};
export default CounterGive;
