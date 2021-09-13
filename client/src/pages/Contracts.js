import { Link, Redirect } from "react-router-dom";

const Contracts = () => {
  const something = () => {
    console.log(" THis is something");
  };
  return (
    <div
      onClick={something}
      className="flex flex-row items-center justify-center bg-cardano-dark bg-cover bg-left  h-screen bg-no-repeat"
    >
      <Link to="/contracts/vesting" className="flex flex-col justify-center items-center rounded-lg h-72 w-1/5 bg-blue-200 m-10 cursor-pointer hover:bg-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">
        <p className="text-2xl text-light-gray">Vesting Contract</p>
      </Link>
      <Link to="/contracts/mint"className="flex flex-col justify-center items-center rounded-lg h-72 w-1/5 bg-blue-200 m-10 cursor-pointer hover:bg-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">
      <p className="text-2xl text-light-gray">Mint Tokens</p>
      </Link>
    </div>
  );
};

export default Contracts;
