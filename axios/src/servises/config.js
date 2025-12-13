import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

api.interceptors.request.use(
  (req) =>{

    req.headers.Authorization = "token"
    console.log(`${req.method} request send to ${req.url}`)
    return req

  },
  (error)=>{

    console.log(error);
    return Promise.reject(error)
    

  }
)

api.interceptors.response.use(
  (res) =>{

    console.log(res.data)
    return res.data

  },
  (error)=>{

    console.log(error);
    return Promise.reject(error)
    

  }
)

export default api