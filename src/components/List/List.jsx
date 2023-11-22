import './List.css'
import ResetButton from '../ResetButton/ResetButton'
import ClearButton from '../ClearButton/ClearButton'

function List({listItems, getItems}) {

    return (
        <>
            <h2>Shopping List</h2>
            <ResetButton getItems = {getItems}/>
            <ClearButton getItems = {getItems}/>
            {listItems.map(item => (
                <div key={item.id} className="listBox">
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.unit}</p>
                </div>
            ))}
        </>
    )
}

export default List
