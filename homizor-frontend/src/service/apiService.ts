import axios, { AxiosResponse } from "axios"
import { Article, Storage } from "./modules"


//-----------------------Article-----------------------//

export function getAllArticle(){
    return axios.get("/api/article/getAll")
        .then((response: AxiosResponse<Array<Article>>) => response.data)
}

export function addArticle(article: Article){
    return axios.post("/api/article/add", article)
}

export function deleteArticle(articleId: string){
    return axios.delete("/api/article/delete/" + articleId)
}

//-----------------------Storage-----------------------//

export function getAllStorages(){
    return axios.get("/api/storage/getAll")
        .then((response: AxiosResponse<Array<Article>>) => response.data)
}

export function addStorage(storage: Storage){
    return axios.post("/api/storage/add", storage)
}

export function deleteStorage(storageId: string){
    return axios.delete("/api/storage/delete/" + storageId)
}