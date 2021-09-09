import { Link, Redirect } from "react-router-dom";

const Contracts = () => {
  const something = () => {
    console.log(" THis is something");
  };
  return (
    <div
      onClick={something}
      className="flex flex-row items-center justify-center h-screen bg-gray-300"
    >
      <Link to="/contracts/vesting" className="flex flex-col rounded-lg h-72 w-1/5 bg-blue-200 m-10 cursor-pointer hover:bg-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
      </Link>
      <Link className=" rounded-lg h-72 w-1/5 bg-blue-200 m-10 cursor-pointer hover:bg-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">
       
      </Link>
    </div>
  );
};

export default Contracts;
