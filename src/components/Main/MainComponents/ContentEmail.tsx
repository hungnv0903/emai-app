import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getContentEmail } from '../../../until/data';

const ContentEmail = () => {
  const {emailId} = useParams() ; 
  const [contentEmail , setContentEmail] = useState<any>({}) ; 

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const result = await getContentEmail(emailId||"") ;
        setContentEmail(result) ;  
      } catch (error) {
        console.error(error) ; 
      }
    }

    fetchData() ; 
  } , [emailId])

  console.log("ContentEmail : ",contentEmail);

  return (
    <>
      {contentEmail.from && (
        <div className='p-4'>
          <div className='row'>
              <div className='col-4 d-flex'>
                  <img src={(contentEmail.folder==='sent' || contentEmail.folder==='drafts')? 
                  (contentEmail.to.avatarUrl):(contentEmail.from.avatarUrl)} 
                  className='rounded-circle' style={{ width:'50px' , height:'50px' }} alt="" /> 
                  <div className='ms-2'>
                    <span className='fw-bold'>{(contentEmail.folder==='sent' || contentEmail.folder==='drafts')? 
                    (contentEmail.to.name):(contentEmail.from.name)}</span><br />
                    <span className='fw-light'>{(contentEmail.folder==='sent' || contentEmail.folder==='drafts')? 
                    (contentEmail.to.email):(contentEmail.from.email)}</span>
                  </div>
              </div>
              <div className='col-8 d-flex align-items-center '>
                  <div className='ms-auto'>
                    <span className='me-2'>{contentEmail.timestamp.slice(0,10)}</span>
                    <span className='me-2'> {contentEmail.timestamp.slice(11,19)} </span>
                    <button type="button" className="btn btn-secondary me-2">Reply</button>
                    <button type="button" className="btn btn-outline-success me-2">Forward</button>
                    <button type="button" className="btn btn-outline-danger me-2">Delete</button>
                  </div>
              </div>
          </div>
          <div className='row'>
            <h1 className='my-4 pt-4'>{contentEmail.main.title}</h1>
            <p className='my-4'>{contentEmail.main.content}</p>
          </div>
        </div>
      ) }
    </>
  )
}

export default ContentEmail