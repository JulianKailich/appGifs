import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'; 

export const GifGrid = ({ category }) => {


    // reenombro data como images
  const {data:images, loading} = useFetchGifs(category);


    return (    
    <>
    <h3> { category }</h3>
        
    {loading ? <p className="animate__animated animate__flash">Loading...</p> : null}

    {<div className="card-grid">
    
            {
                images.map(img => (
                // el argumento ({...img}) que le envio al componente es muy utilizadod de esta forma y hace referencia a las propiedades necesarias de la img (que lo pasamos como argumento en el componente) 
                <GifGridItem 
                key={img.id} 
                { ...img }
                />
            ))
            }
      
    </div>}
    </>

  )
}
