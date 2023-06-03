import axios, { AxiosResponse } from "axios"
import { Article } from "./modules"

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
