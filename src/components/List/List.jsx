import './List.css'

function List({listItems}) {
    console.log(listItems)
    return (
        <>
            {listItems.map(item => (
                <div className="listBox">
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.unit}</p>
                </div>
            ))}
        </>
    )
}

export default List
