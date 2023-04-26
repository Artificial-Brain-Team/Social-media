import axios from "axios"

export class PostApiService{

    getAll(){
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }

    getPostById(id){
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }

    getPostByIdUser(id){
        return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    }

    update(id, body){
        return axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,body)
    }

    delete(id){
        return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }

    createPost(body){
        return axios.post("https://jsonplaceholder.typicode.com/posts",body)
    }

}