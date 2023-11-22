import { useState } from 'react'
import axios from 'axios'

function Form() {

    // react state
    let [newItemName, setnewItemName] = useState('')
    let [newItemQuantity, setnewItemQuantity] = useState(0)
    let [newItemUnit, setnewItemUnit] = useState('')
    
    // client state

    axios

    return (
        <>
            <h2>Add an Item</h2>
            <label>
                Item:
                <input
                    type="text"
                    placeholder="Item name here"
                    value={newItemName}
                    onChange={(event) => setnewItemName(event.target.value)}
                ></input>
            </label>
            <label>
                Quantity:
                <input
                    type="number"
                    placeholder="Number of units"
                    value={newItemQuantity}
                    onChange={(event) => setnewItemQuantity(event.target.value)}
                ></input>
            </label>
            <label>
                Unit:
                <input
                    type="text"
                    placeholder="Unit type"
                    value={newItemUnit}
                    onChange={(event) => setnewItemUnit(event.target.value)}
                ></input>
            </label>
            <button>
                Save
            </button>
        </>
    )
}

export default Form
