import './List.css'
import ResetButton from '../ResetButton/ResetButton'
import ClearButton from '../ClearButton/ClearButton'
import RemoveButton from '../RemoveButton/RemoveButton'
import PurchaseButton from '../PurchaseButton/PurchaseButton'

function List({listItems, getItems}) {

    return (
        <>
            <h2>Shopping List</h2>
            <ResetButton getItems = {getItems}/>
            <ClearButton getItems = {getItems}/>
            <div className = "row">
            {listItems.map(item => (
                <div key={item.id} className="col card">
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.unit}</p>
                <PurchaseButton id = {item.id} getItems={getItems} isPurchased={item.isPurchased}/>
                <RemoveButton id = {item.id} getItems={getItems}/>
                </div>
                ))}
                </div>
                
            
        </>
    )
}

export default List
