import { useEffect, useState } from "react"
import { Article } from "../modules"
import { addArticle, getAllArticle } from "../apiService"
import ArticleGallery from "../componets/ArticleGallery"
import Header from "../componets/Header/Header"
import './MainPage.css'


export default function Mainpage(){

    
    const [article, setArticle] = useState("")
    const [articles, setArticles] = useState<Array<Article>>([])

    function saveArticle(){
       addArticle({name: article})
       .then(()=>setArticle("")) 
    }

    useEffect(()=>{
        getAllArticle()
          .then((articles: Array<Article>) => setArticles(articles))
    },[article])

    const searchArticles = articles.sort((a,b) => a.name.localeCompare(b.name))
        .filter(g => g.name.toLowerCase().includes(article.toLowerCase()))
        .map(search => 
        <div key={search.id}  style={{margin: '5px', border: '10px solid black'}}>
            <div><ArticleGallery article={search}/></div>
        </div>)


    return(
        <div className="main-color">
            <div>
                <div className="main-input"><input type='text' value={article} onChange={event => setArticle(event.target.value)} placeholder='Article to add!'></input></div>
            </div>
            <div>
                <div className="main-button"><button onClick={saveArticle}>Add Article</button></div>
            </div>
            <div>
                {searchArticles}
            </div>
        </div>
    )
}