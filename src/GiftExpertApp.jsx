import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState( ['Dragon Ball'] );  //use state snipet, mantiene el estado. No se deben poner los hooks en una condicionante porque se le va la onda de cual sigue
   
    const onAddCategory = (newCategory)=>{
        
       // console.log(newCategory);

       if (categories.includes(newCategory)) return; //revisa si existe el nuevo valor en el arreglo "categories", si es así, se sale  
        setCategories([newCategory, ...categories ]);
        //setCategories(cat => [...cat, 'Naruto']);

    }

  return (
    <>
       
        <h1>GiftExpertApp</h1>

        {/* Input */}
        <AddCategory        
            onNewCategory = { (value) => onAddCategory(value) }        //"on" se usa para eventos, cuando se agrega algo
        />          
   
            {
                categories.map( (category) => 
                   (
                    
                    <GifGrid 
                    key={category} 
                    category={category} /> //mandarlo como llave y como categoria
                                      
                   )

                )
            }             
    </>
  )
}
