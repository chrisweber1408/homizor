import { deleteArticle, getAllArticle } from "../../service/apiService";
import { Article } from "../../service/modules";
import './ArticleTile.css'


interface ArticleGalleryProps{
    article: Article
}

export default function ArticleTile(props: ArticleGalleryProps){

    function deleteOneArticle(id: string | undefined){
        if(id){
            deleteArticle(id)
        }
    }

    return(
        <div className="background">
            <div className="name">{props.article.name}</div>
            <div className="test">
                <div className="select">
                    <select name="test" id="123"></select>
                </div>
                <div className="deleteButton">
                    <button className="button" onClick={()=> deleteOneArticle(props.article.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}