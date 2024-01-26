import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
const Main = () => {
  const avatarUrl = localStorage.getItem('avatarUrl') ; 
  const location = useLocation() ; 
  const navigate = useNavigate() ; 
  const handleLogout = ()=>{
      navigate("/login") ; 
  }
  return (
    <Fragment>
      <div className='row'>
        <div className='col-2 d-flex align-items-center' style={{ backgroundColor:'#0E1F33' }}>
          <img className='w-100' src="https://fa-react-email-app.vercel.app/static/media/connect-logo-white.c4cdada4.svg" alt="" />
        </div>
        <div className='col-10 d-flex bg-light border-bottom'>
          <div className='col-7 d-flex align-items-center'>
              <span>Pathname:<strong>{location.pathname}</strong></span>
          </div>
          <div className='col-5 d-flex align-item-center justify-content-end'>
                <div className='d-flex align-items-center m-2'>
                  <div>
                    <strong>{localStorage.getItem('name')}</strong> <br />
                    <span>{localStorage.getItem('email')}</span>
                  </div>
                </div>
                <div className='d-flex flex-column align-items-center m-2'>
                  {avatarUrl && ( <img className='rounded-circle my-auto' style={{ width:'50px' }} src={avatarUrl} alt="" />)}
                </div>
                <div className='d-flex flex-column align-items-center m-2'>
                    <button className='btn btn-danger my-auto' onClick={handleLogout}><i className="fa-solid fa-power-off"></i></button>
                </div>
          </div>
        </div>
      </div>
      <div className='row  d-flex' style={{ height:'100vh' }}>
          <div className='col-1 px-0' style={{ backgroundColor:'#0E1F33' }}>
            <ul className="list-unstyled">
              <NavLink to={'home'} style={({isActive})=>({backgroundColor:isActive?"#1D4ED8":"" , width:'100%' ,  display:'block'})}>
                <li className="text-center py-3"><i className="fa-solid fa-house" style={{ color:'white' }}></i></li>
              </NavLink>
              <NavLink to={'email'} style={({isActive})=>({backgroundColor:isActive?"#1D4ED8":"" , display:'block'})}>
                <li className="text-center py-3"><i className="fa-solid fa-envelope" style={{ color:'white' }}></i></li>
              </NavLink>
              <NavLink to={'contact'} style={({isActive})=>({backgroundColor:isActive?"#1D4ED8":"" , display:'block'})}>
                <li className="text-center py-3"><i className="fa-solid fa-user" style={{ color:'white' }}></i></li>
              </NavLink>
            </ul>
          </div>
          <div className='col-11 px-0 pe-3'>
            <Outlet></Outlet>
          </div>
      </div>
    </Fragment>
  )
}
export default Main