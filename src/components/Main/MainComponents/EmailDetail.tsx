import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { getListMessageFromFolder } from '../../../until/data';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from '../../CssModule/CssModule.module.css' ; 
import { dark } from '@mui/material/styles/createPalette';

const EmailDetail = () => {
    // Lấy folderId 
    const {folderId} = useParams() ; 
    const [listMessage , setListMessage] = useState<any>([]) ; 

    const location = useLocation() ; 
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const newListMessage = await getListMessageFromFolder(folderId || "" ) ; 
                setListMessage(newListMessage) ; 
            } catch (error) {
                console.error(error) ; 
            }
        }

        fetchData() ; 
    },[folderId])
    console.log("listMessage : " , listMessage);

    const handleRead = (item:any)=>{
        item.unread = true ; 
    }
  return (
    <div className='d-flex'>
            <div className='col-xl-4 col-sm-2'  style={{ height:'100vh' , overflow:'scroll' }}>
                <ListGroup>
                {
                    listMessage.map((item:any)=>(
                        <NavLink key={item.id} 
                            className={`text-decoration-none ${!item.unread ? styles.unread:""}`}
                            style={({isActive})=>({backgroundColor:isActive?"#3B82F6":"",          
                            color:isActive?"white":"black",
                            width:'100%' ,  display:'block'})} 
                            to={item.id} onClick={()=>handleRead(item)} >
                            <div className='row border-bottom py-3 ps-3'>
                                <div className='d-flex justify-content-around'>  
                                    <img className='rounded-circle d-block' style={{ width:'50px' , height:"50px" }} 
                                    src={(item.folder==='sent' || item.folder==='drafts')? (item.to.avatarUrl):(item.from.avatarUrl)} alt="" />
                                    <div className='px-4'>
                                        <span className='fw-semibold'>
                                            {(item.folder==='sent' || item.floder==='drafts')? (item.to.name):(item.from.name)}
                                            </span>
                                        <span className='float-end'>{item.timestamp.slice(0,10)}</span>
                                        <p className='fw-bold mb-0'>{item.main.title.slice(0,25)}...</p>
                                        <p className='fw-light'>{item.main.content.slice(0,80)}...</p>
                                    </div>
                                </div>
                            </div>   
                        </NavLink>
                    ))
                }
                </ListGroup>
            </div>
    
        <div className='col-8'>
            {location.pathname===`/main/email/${folderId}`? (
                <div className='d-flex align-items-center h-100'>
                    <h2 className='mx-auto text-center fw-normal'>Please choose an email</h2>
                </div>
            ):(
                <Outlet></Outlet>
            )}
        </div>
    </div>
  )
}

export default EmailDetail