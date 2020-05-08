import React, {useContext} from 'react';
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

// standard way to create a private route in React
const PrivateRoutes = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      { ...rest }
      render={props =>
        // if user is NOT authenticated, and loading IS done, do thing after ? else do thing after :
        !isAuthenticated && !loading ? ( 
        <Redirect to="/login"/>
      ) : (
        <Component {...props}/>
      )}
    />
  )
}

export default PrivateRoutes