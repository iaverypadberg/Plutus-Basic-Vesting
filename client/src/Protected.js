import { Route, Redirect } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"


const Protected = ({component:Component, ...rest}) => {
    const [userContext,setUserContect] = useContext(UserContext)
    return (
        <Route
        {...rest}
        render={(props)=>{
            console.log(userContext.isAuth)
            if(userContext.isAuth){
                return <Component/>;
            }else{
                console.log("Sorry, you're not authenticated")
                return(
                    <Redirect to={{pathname: "/login", state:{from:props.location}}}/>
                )
            }
        }}
        
        />


    )
}

export default Protected
