import React, { Fragment } from 'react'
import styles from '../../CssModule/CssModule.module.css'

const ContructionPage = () => {
  return (
    <Fragment>
      <div className='d-flex'>
        <div className={styles.folder}>
            <h6 className='text-light'>Contruction</h6>
        </div>
        <div className={`${styles.contentEmail} d-flex align-items-cemter`}>  
          <img className='mx-auto w-50 h-50 my-auto' src="https://fa-react-email-app.vercel.app/static/media/under-construction.ad9fbf48.png" alt="" />
        </div>
      </div>
    </Fragment>
  )
}

export default ContructionPage