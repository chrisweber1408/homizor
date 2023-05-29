import { Article } from "../modules";


interface ArticleGalleryProps{
    article: Article
}

export default function ArticleGallery(props: ArticleGalleryProps){
    return(
        <div>
            <div>{props.article.name}</div>
            <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    )
}