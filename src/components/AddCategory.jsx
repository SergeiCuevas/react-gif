import { useState } from "react";


export const AddCategory = ( {onNewCategory} ) => {   //hay que mandarle aquí el setcategories

  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ({target}) => {
    
    setInputValue(target.value);

  }

  const onSubmit = (event)=>{ 

        event.preventDefault(); 
        if(inputValue.trim().length <= 1) return;      

        //setCategories(categories /*estado actual*/ => [inputValue, ...categories ] ); //agrega el valor y lo añade a lo que estaba "categories", desestructurado
        onNewCategory(inputValue.trim());
        setInputValue(''); //para limpiar la caja de texto 
  }

  
  return ( 
   //<form onSubmit={ (event) => onSubmit(event) }>  Forma larga con la función flecha, toma el evento y se lo manda a la función
   <form onSubmit={ onSubmit }> 
        <input 
            type="text"
            placeholder="Buscar gifts"
            value={inputValue}
            onChange={onInputChange}
        />
   </form>
  )
}
 