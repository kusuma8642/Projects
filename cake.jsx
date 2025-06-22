import cake from './Images/cake.jpg'

import {use,useState} from 'react'
import './App.css'

function Cake(value){


    
    let[Fav,setFav]=useState("Add to Fav")
    let[Added,setAdded]=useState("want to add")
    let changeFav=()=>{
        console.log(value.name,"Added to Fav")

        if(Fav=='Added to Fav'){


            setFav("Add to Fav")
            setAdded("want to add")
        }
        else{

            setFav("Added to Fav")
            setAdded("Added")
        }
        
    }
    return(
        <div className='Box'>
           <img src={value.image} alt=""/>
            <p>{value.name}</p>
            
            <button onClick={changeFav}>{Fav}</button>
            <p>{Added}</p>
            <button onClick={value.delete}>Delete</button>
        </div>
    )

}
export default Cake