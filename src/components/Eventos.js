import React, {useState} from 'react'

const Eventos = () => {

    const [valueInput, setValueInput] = useState("")

    const handleKeyDownInput = (e) => {
        console.log("e.key", e.key);
        
        if(!["a", "e", "i", "o", "u"].includes(e.key)){
            setValueInput(valueInput+e.key)
        }

        
    }

    return (
        <div>
            <h1>Eventos</h1>

            <div>
                <input type="text" onKeyDown={handleKeyDownInput} value={valueInput}></input>
            </div>
        </div>
    )
}

export default Eventos