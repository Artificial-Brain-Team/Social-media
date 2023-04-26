import axios from "axios"

export class PostApiService{

    getAll(){
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }

    getPostByIdUser(id){
        return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    }

}