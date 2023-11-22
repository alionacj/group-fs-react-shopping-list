import axios from 'axios'

function ResetButton ({getItems}) {
    const reset = () => {
       axios({
        method: 'PUT',
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
    <button className="btn btn-warning" onClick={reset}>Reset</button>
    )
}

export default ResetButton;