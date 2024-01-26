import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import styles from '../../CssModule/CssModule.module.css'

const EmailPage = () => {

  const location = useLocation() ; 
  console.log(location.pathname);
  const EMAIL_FOLDER = [
    {lable:"Inbox", path:"inbox"},
    {lable:"Sent", path:"sent"},
    {lable:"Reminder", path:"reminder"},
    {lable:"Spam", path:"spam"},
    {lable:"Favorite", path:"favorite"},
    {lable:"Junks", path:"junks"},
    {lable:"Drafts", path:"drafts"},
  ]
  return (
    <div className='d-flex'>
      <div className={`col-1 ${styles.boxsizing}`}>
          <ul className='list-unstyled' style={{ width:'111%'}}>
            {
              EMAIL_FOLDER.map((item)=>(
                <NavLink key={item.path} to={item.path} className='w-100 text-decoration-none fs-6 text-white' 
                  style={({isActive})=>({backgroundColor:isActive?"#1D4ED8":"" , display:'block'})}>
                    <li className='py-3 ps-3'>{item.lable}</li>
                </NavLink>
              ))
            }
          </ul>
      </div>
      <div className='col-11 bg-light' style={{ height:'100vh'}}>
        {
          location.pathname==='/main/email'?(
            <div className='d-flex'>
              <div className='col-3 border-end d-flex align-items-center' style={{ height:'100vh'}}>
                  <h2 className='mx-auto text-center fw-normal'>Please choose a folder</h2>
              </div>
              <div className='col-9 d-flex align-items-center' style={{ height:'100vh'}}>
                  <h2 className='mx-auto text-center fw-normal'>Please choose a folder</h2>
              </div>
            </div>
          ):(
            <Outlet></Outlet>
          )
        }
      </div>
    </div>
  )
}

export default EmailPage