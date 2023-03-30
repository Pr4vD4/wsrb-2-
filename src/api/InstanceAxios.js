import axios from "axios";

const api = axios.create({
    baseURL: 'http://sergeiapi1/api'
})

export {api}
