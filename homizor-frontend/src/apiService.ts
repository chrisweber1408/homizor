import axios from "axios"

export function countPlus(){
    return axios.patch("/api/count")
}

export function getNumber(){
    return axios.get("/api/get")
}