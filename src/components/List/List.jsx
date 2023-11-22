import './List.css'

function List({listItems}) {
    return (
        <>
            <h2>Shopping List</h2>
            <button>Reset</button>
            <button>Clear</button>
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
