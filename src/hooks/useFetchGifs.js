import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({

        data: [],
        loading: true

    });

    // el useEffect me permite ejecutar el codigo de la funcion que tiene dentro (getGifs) cada vez que la category cambie (por el [category], si esto estaria vacio [] se haria 1 vez)
    useEffect( () => {

        getGifs(category).then(imgs => { 
            
            setTimeout(() => {
                setState({

                    data: imgs,
                    loading: false
                });
            }, 1500);
            
    });

    }, [category] ) 

 

    return state; // el state puede tener otro nombre y no es mas que este objeto: {data:[], loading:true};

}