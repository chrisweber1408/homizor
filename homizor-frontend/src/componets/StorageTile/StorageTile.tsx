import { deleteArticle } from "../../service/apiService";
import { Storage } from "../../service/modules";
import { useNavigate } from "react-router"
import './StorageTile.css'


interface StorageGalleryProps{
    storage: Storage
}

export default function ArticleTile(props: StorageGalleryProps){

    const nav = useNavigate()
    
    function deleteOneArticle(id: string | undefined){
        if(id){
            deleteArticle(id)
        }
    }

    return(
        <div className="backgroundStorage" onClick={()=> nav("/edit/" + props.storage.id)}>
            <div className="nameStorage">{props.storage.name}</div>
        </div> 
    )
}