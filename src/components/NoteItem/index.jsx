import {Container} from "./styles";

import {FiX, FiPlus} from "react-icons/fi"

export function NoteItem({value,isNew,onClick, ...rest}){
    return(
        <Container isNew={isNew}> {/* Isso é para conseguir usar essa prop como condicional de estilo no styles.js*/}
            <input 
            type="text" 
            value={value}
            readOnly={!isNew}
            {...rest}
            />

            <button 
            type="button"
            onClick={onClick}>

                {isNew? <FiPlus/>:<FiX/>}
            
            </button>



        </Container>

    )


}