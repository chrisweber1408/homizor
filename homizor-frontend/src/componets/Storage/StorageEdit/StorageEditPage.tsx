import { useCallback, useState } from "react"
import { useParams } from "react-router"
import { getOneStorageToEdit } from "../../../service/apiService"
import {Storage} from "../../../service/modules"


export default function StorageEditPage(){

    const {id} = useParams()
    const [storage, setStorage] = useState({}as Storage)

    const fetchStorage = useCallback(() => {
        if(id){
            getOneStorageToEdit(id)
                .then(response => response.data)
                .then(data => {
                    setStorage(data)
                })
        }
    },[id])

    //todo backend anbinden...

    return(
        <div>
            {storage.id}
            <h1>{storage.id}</h1>
            test
        </div>
    )
}