import { deleteArticle, getAllArticle } from "../../service/apiService";
import { Article } from "../../service/modules";
import './ArticleTile.css'


interface ArticleGalleryProps{
    article: Article
}

export default function ArticleTile(props: ArticleGalleryProps){


    //todo

    function deleteOneArticle(id: string | undefined){
        if(id){
            deleteArticle(id)
        }
    }

    return(
        <div className="backgroundArticle">
            <div className="nameArticle">{props.article.name}</div>
        </div>
    )
}