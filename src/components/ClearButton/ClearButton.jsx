import axios from 'axios'

function ClearButton ({getItems}) {
    const Clear = () => {
       axios({
        method: 'DELETE',
        url: '/shoppinglist'
       })
       .then((result) => {
        getItems()
       })
       .catch((error) => {
        console.log(error);
       })

    }

    return(
    <button onClick={Clear}>Clear</button>
    )
}

export default ClearButton;