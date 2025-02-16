import React, { createContext, useContext, useEffect, useState } from 'react'

export  const AuthContext=createContext(); 
export const Authprovider=({children})=>{
    const[token,setToken]=useState(localStorage.getItem("token"));
    const[user,setUser]=useState("");
    const[isLoading,setIsLoading]=useState(true);
    let isLoggedIn=!!token;
    const BearerToken=`Bearer ${token}`;
    // console.log("isloggeed",isLoggedIn);
    
    const logout=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }
    const setTokenInLs=(serverToken)=>{
        setToken(serverToken);
            return localStorage.setItem("token",serverToken);

    }

    //jwt authontication 
    const userAuthontication=async()=>{
        if(!token) return;
        try {
            setIsLoading(true);
            const response=await fetch("http://localhost:8080/api/user",
                {
                    method:"GET",
                    headers:{
                       "Authorization":BearerToken,
                    }
                }
            );
            if(response.ok){
                const data=await response.json();
                // console.log(data.userData);
                
                setUser(data.userData);
                setIsLoading(false);
            }else{
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
       if(token){
        userAuthontication();
       }
    },[])
        return<AuthContext.Provider value={{setTokenInLs,logout,isLoggedIn,user,BearerToken,isLoading}}>
            {children}
        </AuthContext.Provider>
}


export const useAuth=()=>{
    return useContext(AuthContext);
}
