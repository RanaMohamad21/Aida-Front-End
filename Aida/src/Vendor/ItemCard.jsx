
import ProductCard from "../UI/ProductCard";
import trash from "../assets/vendor/products/trash.png";
import PropTypes from "prop-types";

ItemCard.propTypes = {
  dummyItem: PropTypes.object,
  deleteItem: PropTypes.func,
  shelfID: PropTypes.string
}
function ItemCard({ dummyItem, deleteItem, shelfID}) {
  return (
    <ProductCard dummyItem={dummyItem}
      deleteItem={deleteItem}
      shelfID={shelfID}
    >
      <div className=" flex justify-between text-teal">
        <span>available left</span>
        <span>{dummyItem.availableLeft}</span>
      </div>
      <div className=" flex justify-between text-teal">
        <span>Revenues</span>
        <span>{dummyItem.revenues}</span>
      </div>
      <div className=" flex justify-between text-teal">
        <span>subscribed</span>
        <span>{dummyItem.subscribed}</span>
      </div>
      <div className="flex  justify-end">
        <button onClick={() => deleteItem(shelfID, dummyItem.itemID)}>
          <img src={trash} alt="delete" className="h-6 mt-1" />
        </button>
      </div>
    </ProductCard>
  )
}

export default ItemCard;

