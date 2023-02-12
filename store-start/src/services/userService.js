import http from "../http-common";

const login = (loginData) =>{
    return http.post("/user/login", loginData)
}

const register = (userData) =>{
    return http.post("/user/register", userData)
}

const userService = {
    login,
    register
}

export default userService