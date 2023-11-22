import axios from 'axios'

function RemoveButton ({id, getItems}) {
    
    const Remove = () => {
        console.log(id);
       axios({
        method: 'DELETE',
        url: `/shoppinglist/${id}`
       })
       .then((result) => {
        getItems()
       })
       .catch((error) => {
        console.log(error);
       })

    }

    return(
    <button onClick={Remove}>Remove</button>
    )
}

export default RemoveButton;