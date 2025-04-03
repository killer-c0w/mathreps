import { userAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoutes = ({ children }) => {
    const {session} = userAuth();

    if(session == undefined){
        return <p>Loading...</p>
    }
    
    return <>{session ? <>{children}</> : <Navigate to="/login" />}</>;
}

export default PrivateRoutes;