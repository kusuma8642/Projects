

import img1 from './Images/pic1.jpg'
import img2 from './Images/pic2.jpg'
import img3 from './Images/pic3.jpg'
import img4 from './Images/pic4.jpg'
import Cake from './cake.jsx'
import {use,useState} from 'react'

function CakeList(){
    let [Cakes,setCakes] =useState
    ([ 
        {
            id:1,
            image:img1,
            name:"Doremon"
        },

        {
            id:2,
            image:img2,
            name:"Nobitha"
        },


        {
            id:3,
            image:img3,
            name:"Shizuka"
        },


        {
            id:4,
            image:img4,
            name:"Suniyo"
        },

        {
            id:1,
            image:img1,
            name:"Doremon"
        },

        {
            id:2,
            image:img2,
            name:"Nobitha"
        },


        {
            id:3,
            image:img3,
            name:"Shizuka"
        },


        {
            id:4,
            image:img4,
            name:"Suniyo"
        },
         {
            id:1,
            image:img1,
            name:"Doremon"
        },

        {
            id:2,
            image:img2,
            name:"Nobitha"
        },


        {
            id:3,
            image:img3,
            name:"Shizuka"
        },


        {
            id:4,
            image:img4,
            name:"Suniyo"
        }
    ])
    let deleteCard=(id)=>{
            console.log(id,"Deleted")

            let newList=Cakes.filter((cake)=>cake.id!=id)
            setCakes(newList);
            console.log(newList)
        }
        
        let cakesList=Cakes.map((s)=>
        <Cake image={s.image} 
           name={s.name}
           delete={()=>deleteCard(s.id)}
        />)

        return(
            <>
            {cakesList}
            </>
        )
}
export default CakeList