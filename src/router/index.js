import { createRouter, createWebHistory } from 'vue-router';
import RestaurantDetails from '../views/RestaurantDetails.vue';
// import restaurantData from '../assets/data.json';
const routes = [
    {
        path: '/RestaurantDetails/:id',
        name: 'RestaurantDetails',
        component: RestaurantDetails,
        props: true
        // props(route) {
        //     const data = restaurantData.data.search.business;
        //     return { restDetails: data.filter( restaurant => restaurant.id === route.params.id) };
        // }
    },
    // {
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     component: () => import('../views/Dashboard.vue')
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import('../views/About.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router