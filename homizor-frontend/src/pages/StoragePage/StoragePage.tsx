import { useEffect, useState } from "react"
import { Storage } from "../../service/modules"
import { addStorage, getAllStorages } from "../../service/apiService"
import StorageTile from "../../componets/StorageTile/StorageTile"
import './StoragePage.css'


export default function StoragePage(){

    
    const [storage, setStorage] = useState("")
    const [storages, setStorages] = useState<Array<Storage>>([])

    function saveStorage(){
       addStorage({name: storage})
       .then(()=>setStorage("")) 
    }

    useEffect(()=>{
        getAllStorages()
          .then((storages: Array<Storage>) => setStorages(storages))
    },[storage])

    const searchStorages = storages.sort((a,b) => a.name.localeCompare(b.name))
        .filter(g => g.name.toLowerCase().includes(storage.toLowerCase()))
        .map(search => 
        <div key={search.id}>
            <div><StorageTile storage={search}/></div>
        </div>)


    return(
        <div className="entrys">
            <div>
                <div>
                    <input 
                        className="addArticleInput"
                        type='text'
                        value={storage}
                        onChange={event => setStorage(event.target.value)}
                        placeholder='Storage to add!'>
                    </input>
                </div>
            </div>
            <div>
                <div>
                    <button className="addArticleButton" onClick={saveStorage}>Add Storage</button>
                </div>
            </div>
            <div>
                {searchStorages}
            </div>
        </div>
    )
}