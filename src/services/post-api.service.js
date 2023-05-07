import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:3000/660/",
    headers: {
        Authorization: `Bearer ${window.localStorage.getItem("jwt")}`
    }
})
export class PostApiService{

    getAll(){
        return http.get("posts")
    }

    getPostById(id){
        return http.get(`posts/${id}`)
    }

    getPostByIdUser(id){
        return http.get(`posts?userId=${id}`)
    }

    update(id, body){
        return http.patch(`posts/${id}`,body)
    }

    delete(id){
        return http.delete(`posts/${id}`)
    }

    createPost(body){
        return http.post("posts",body)
    }

}