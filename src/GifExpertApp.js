import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Simpson']);

/*   const handleAdd = () => {
        // el setCategories cambia el estado anterior del arreglo, puedo agregar un elemento llamando ...categories (a las categorias que ya tengo), y luego agrego la nueva. Si quisiera agregarlo al principio del arreglo, seria asi: ['HunterXHunter', ...categories] 
        setCategories ([...categories, 'HunterXHunter']);
  } */

    return (

        <>
            <h2><span className="title">GIFS APP</span> - JK Dev</h2>
            <AddCategory setCategories={setCategories}/>
            <hr  />

            

            <ol>

                {   // el map recorrre el arreglo, un for no sirve, tira erro
                    categories.map(category => {
                        // el key es obligatrio, debe ser un valor unico (es mas para las bases de datos) y no debe ser el numero del indice de la lista
                        return <GifGrid key={category} category={category} />
                    })
                }

            </ol>
        </>



    )


}


export default GifExpertApp;