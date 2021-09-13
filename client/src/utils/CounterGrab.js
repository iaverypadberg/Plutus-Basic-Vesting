
import { useCountUp } from "react-countup";

const CounterGrab = () => {
  const {start} = useCountUp({
    ref: "counter",
    start: 0,
    // startOnMount: false,
    duration: 200,
    end: 200,
  });
  return (
    <div className="ml-2 text-md">
      <span id="counter" />
    </div>
  );
};
export default CounterGrab;
