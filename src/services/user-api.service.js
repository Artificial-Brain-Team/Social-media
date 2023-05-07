import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:3000/",
})
export class UserApiService {
    login(body){
        return http.post("login", body)
    }

    getAll() {
        return http.get("users")
    }

    getUserById(id){
        return http.get(`users${id}`)
    }

    createUser(body){
        return http.post("users", body)
    }

}