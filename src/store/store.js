import { reactive } from 'vue'

export const store = reactive({
    name: '',
    rating: '',
    address: '',
    phone: '',
    photos: '',
    reviews: []
})