import Button from "../UI/Button";
import VendorNavBar from "./VendorNavBar";
import add from "../assets/vendor/navBar/add.png"
function VendorShelves() {
    return (
        <>
         <VendorNavBar/>
         <div className="grid grid-rows-[auto,1fr]">
            <div className=" flex flex-col gap-2">
                <dev className = "flex">
                    <dev><input type="text" placeholder="Shelf name..." className="border-solid border-black "/></dev>
                    <dev><Button background={"FlamingoPink"}>Add Shelf <span >
                    <img src={add} alt="add" className="w-4 h-4" />
                        </span></Button></dev>
                </dev>
                <dev className = "block ">
                <p className="text-teal">
                Tip: placing products on the same shelf allows them to be recommended together when a customer buys your product, so placing products that are often bought together in the same shelf will increase your sales
                </p>
                </dev>
            </div>

            <div className="bg-gray">The shelves</div>
         </div>
            
        </>
    )
}

export default VendorShelves;
