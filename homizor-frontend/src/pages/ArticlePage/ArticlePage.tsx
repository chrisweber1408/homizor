import { useEffect, useState } from "react"
import { Article } from "../../service/modules"
import { addArticle, getAllArticle } from "../../service/apiService"
import ArticleTile from "../../componets/ArticleTile/ArticleTile"

import './ArticlePage.css'


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
        <div key={search.id}>
            <div><ArticleTile article={search}/></div>
        </div>)


    return(
        <div className="entrys">
            <div>
                <div>
                    <input 
                        className="addArticleInput"
                        type='text'
                        value={article}
                        onChange={event => setArticle(event.target.value)}
                        placeholder='Article to add!'>
                    </input>
                </div>
            </div>
            <div>
                <div>
                    <button className="addArticleButton" onClick={saveArticle}>Add Article</button>
                </div>
            </div>
            <div>
                {searchArticles}
            </div>
        </div>
    )
}