import TheWelcome from "@/components/TheWelcome.vue";
import {createRouter ,createWebHashHistory} from 'vue-router';
import Home from "@/components/Home.vue";
import about from "@/components/about.vue";
import User from "@/components/User.vue";
import notFound from "@/components/notFound.vue";
import Users from "@/components/Users.vue";
import createUser from "@/components/createUser.vue";
import postsComponent from "@/components/posts.component.vue";
import createPost from "@/components/createPost.vue";
import editPost from "@/components/editPost.vue";

const routes = [
    { path:'/', component: Home},
    { path: '/ListWelcome', component: TheWelcome},
    { path: '/about', component: about},
    { path: '/user/:id', component: User, name:'user'},
    { path: '/users', component: Users},
    { path: '/CreateUser', component: createUser},
    {path:'/:catchAll(.*)' , component: notFound},
    { path: "/user/:id/posts", component: postsComponent, name: 'posts'},
    { path: "/user/:id/createPost", component: createPost, name: 'createPost'},
    { path: "/user/:id/posts/:idPost/edit", component: editPost, name: 'editPost'}

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;