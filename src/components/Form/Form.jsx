import { useState } from 'react'
import axios from 'axios'

function Form({getItems}) {

    // react state
    let [newItemName, setnewItemName] = useState('')
    let [newItemQuantity, setnewItemQuantity] = useState(0)
    let [newItemUnit, setnewItemUnit] = useState('')
    
    // client state

    const addItem = (event) => {
        event.preventDefault()

        axios({
            method: 'POST',
            url: '/shoppinglist',
            data: {
                name: newItemName,
                quantity: newItemQuantity,
                unit: newItemUnit
            }
        })
        .then((result) => {
            getItems()
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <>

            <h2>Add an Item</h2>
            <div className="input-group">
            <form onSubmit={addItem}>
                <label className="row">
                    Item:
                    <input
                        type="text"
                        placeholder="Item name here"
                        value={newItemName}
                        onChange={(event) => setnewItemName(event.target.value)}
                    ></input>
                </label>
                <div className='row'>
                <label className="col">
                    Quantity:
                    <input
                        type="number"
                        placeholder="Number of units"
                        value={newItemQuantity}
                        onChange={(event) => setnewItemQuantity(event.target.value)}
                    ></input>
                </label>
                
                <label className="col">
                    Unit:
                    <input
                        type="text"
                        placeholder="Unit type"
                        value={newItemUnit}
                        onChange={(event) => setnewItemUnit(event.target.value)}
                    ></input>
                </label>
                </div>
                <button className='btn btn-primary'>
                    Save
                </button>
            </form>
            </div>
        </>
    )
}

export default Form
