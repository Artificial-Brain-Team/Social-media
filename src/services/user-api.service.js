import axios from "axios"
export class UserApiService {

    getAll() {
        return  axios.get("https://jsonplaceholder.typicode.com/users")
    }

    getUserById(id){

    }

    createUser(body){
        return axios.post("https://jsonplaceholder.typicode.com/users", body)
    }

}