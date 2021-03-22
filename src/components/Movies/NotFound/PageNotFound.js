import React from 'react'
import imagen from '../../../assets/img/detective.png'
import './NotFound.styles.scss'
 
const PageNotFound = () => {
     
  return (
    <div className="page-not-found">
      <h1>Page Not Found</h1>
      <div className="page-not-img">
        <img 
          className="img-not-found"
          src={imagen} 
        /> 
      </div>
    </div>
  )
  
}
export default PageNotFound