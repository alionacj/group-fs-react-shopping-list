import axios from 'axios'

function PurchaseButton({id, getItems, isPurchased}) {
        const purchaseItem = () => {
            axios({
             method: 'PUT',
             url: `/shoppinglist/${id}`
            })
            .then((result) => {
             getItems()
            })
            .catch((error) => {
             console.log(error);
            })
     
         }
            if(isPurchased){
            return <button disabled>Purchase</button>}
            else {
            return <button className="btn btn-success" onClick={purchaseItem}>Purchase</button>}
}

export default PurchaseButton;