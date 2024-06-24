import "react-multi-carousel/lib/styles.css";
import ProductCard from "../UI/ProductCard";



  // This is a dummy page, 
  //to test individual components
function DummyPage() {
    return (
        
            <>
            <div className=" text-FlamingoPink w-full">
                <p>This is a dummy page for testing components</p>

            
        </div>

  <div>
    {/* put the component you want to test here */}
    <ProductCard />
  </div>
            </>
     
    


    )
}



export default DummyPage;
