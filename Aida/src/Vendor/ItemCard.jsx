
import ProductCard from "../UI/ProductCard";
import trash from "../assets/vendor/products/trash.png";
import PropTypes from "prop-types";

ItemCard.propTypes = {
  product: PropTypes.object,
  deleteItem: PropTypes.func,
  shelfID: PropTypes.string
}
function ItemCard({ product, deleteItem}) {
  return (
    <ProductCard product={product}
      deleteItem={deleteItem}

      style="p-2"
    >
      <div className=" flex justify-between text-teal">
        <span>available left</span>
        <span>{product.availableLeft}</span>
      </div>
      <div className=" flex justify-between text-teal">
        <span>Revenues</span>
        <span>{product.revenues}</span>
      </div>
      <div className=" flex justify-between text-teal">
        <span>subscribed</span>
        <span>{product.subscribed}</span>
      </div>
      <div className="flex  justify-end">
        <button onClick={() => deleteItem( product.itemID)}>
          <img src={trash} alt="delete" className="h-6 mt-1" />
        </button>
      </div>
    </ProductCard>
  )
}

export default ItemCard;

