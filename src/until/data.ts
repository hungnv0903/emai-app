import data from '../data/messages.json' ; 

export const getListMessageFromFolder = (folderName:string)=>{
    return data.filter((item)=>(
        item.folder===folderName 
    ))
}

export const getContentEmail = (id:string)=>{
    return data.find((item)=>(
        item.id===id 
    ))
}