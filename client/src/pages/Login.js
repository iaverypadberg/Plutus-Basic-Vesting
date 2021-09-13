import { Link, Redirect} from 'react-router-dom'
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

const Login = () => {
  const [userContext, setUserContext] = useContext(UserContext)
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e)=> {
    e.preventDefault()
    await setUserContext({isAuth:true})
    setRedirect(true)
    
    };

    return (
      <div className="flex flex-row items-center justify-center bg-cardano-dark bg-cover bg-left  h-screen bg-no-repeat">
            <div className="rounded-md grow bg-gray-100 box-border h-64 w-64">
              <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      
                  <input type="text" id="username" placeholder= "Username" className=" m-1.5 mt-10 rounded-lg" />
                  <input type="password" id="password" placeholder= "Password" className=" m-1.5 rounded-lg" />
                  <button className="bg-gray-200 rounded-md m-1.5 p-1.5 text-sm hover:bg-gray-400 hover:cursor-pointer">
                    Login!
                  </button>
                  <Link>
                  <button id="register" type="button" className="bg-gray-300 rounded-md m-1.5 p-1.5 text-sm hover:bg-gray-400 hover:cursor-pointer">
                    Register
                  </button>
                  </Link>
              </form>
            </div>
            {redirect ? <Redirect to="/home" /> : ""}
          </div>
          )


}

export default Login
