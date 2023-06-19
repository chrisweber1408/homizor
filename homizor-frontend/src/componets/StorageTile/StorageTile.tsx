import { deleteArticle } from "../../service/apiService";
import { Storage } from "../../service/modules";
import './StorageTile.css'


interface StorageGalleryProps{
    storage: Storage
}

export default function ArticleTile(props: StorageGalleryProps){
    
    function deleteOneArticle(id: string | undefined){
        if(id){
            deleteArticle(id)
        }
    }

    return(
        <div className="backgroundStorage">
            <div className="nameStorage">{props.storage.name}</div>
        </div>
    )
}