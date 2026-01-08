import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})

api.interceptors.request.use(
    (req) => {
        req.headers.Authorization = "token"
        console.log(`${req.method} request send to ${req.url}`);
        return req
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (res) => {
        console.log(res.data);
        return res
    },
    (error) => {
        console.log(error);
        return Promise.reject(error)
    }
)
export default api