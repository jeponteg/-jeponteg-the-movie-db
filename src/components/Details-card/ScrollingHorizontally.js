import React,{ useState, useEffect, useContext } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import { DetailsContext } from '../../contexts/DetailsCardContext'
import { getCredits } from '../../api/movie-api'
import { BASE_PATH_IMG } from '../../utils/constants'
import CardMedia from '@material-ui/core/CardMedia'
const ScrollingHorizontally = () => {

  const [credito, setCredito] = useState([])
  const { id } =  useContext(DetailsContext)
  
  useEffect(async() =>{
    if(id){
      await getCredits(id).then((response)=>{
        setCredito(response.cast)
      })
    }
  },[id])
  
  return (
    <div style={{ height: `18.7em` }}>
      <HorizontalScroll animValues = { 2 } config={{ stiffness: 160, damping: 110 }}>
        { 
          credito.map((item)=>{
            const img =`${BASE_PATH_IMG}/w400${item.profile_path}`;
            return(
              item.profile_path ?
                <CardMedia
                  key={img}
                  style={{width:300,height:300,marginRight:10}}
                  className="card-media-img"
                  image={img}
                  title="img"
                />
              : null 
            )
          })
        }
      </HorizontalScroll>
    </div>
  )
}

export default ScrollingHorizontally
