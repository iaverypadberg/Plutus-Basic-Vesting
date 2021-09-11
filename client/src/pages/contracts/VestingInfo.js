const VestingInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-60 w-96 bg-blue-200 rounded-lg">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <label htmlFor="status">Status</label>
          <p id="status">Waiting</p>
        </div>

        <div className="flex flex-row">
          <label htmlFor="time">Status</label>
          <p id="time">Time since transaction sent</p>
        </div>

        <div className="flex flex-row">
          <label htmlFor="status">Status</label>
          <p id="status">Waiting</p>
        </div>

      </div>
    </div>
  );
};

export default VestingInfo;
