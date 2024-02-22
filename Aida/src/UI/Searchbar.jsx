import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";
import microphone from "/src/assets/home/microphoneWhite.png";
import search from "/src/assets/home/search.png";
function Searchbar() {
  return (
    <nav className="w-screen  bg-white px-9">
      {/* Search Bar Section */}
      <div className="flex h-[50px] ">
        {/*Logo*/}
        <div className="  ">
          <img
            src={logoWhiteTxtAida}
            alt="Logo"
            className="h-[30px] mt-[3px]  object-contain "
          />
        </div>
        <div className="w-[300px] mx-9  ">
          {/*Search Section*/}
          <div className="flex  w-fit p-[5px]    justify-between h-[40px] gap-1">
            <div className="h-full w-[30px] bg-teal rounded-tl-2xl rounded-bl-2xl p-[6px] ">
              {/* Voice search */}
              <img
                src={microphone}
                alt="microphone"
                className="h-full   object-contain w-[30px] "
              />
            </div>

            <div className=" flex gap-1  ">
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className=" h-full mt-[1px] border-none md:w-[400px]   hover:ring-2 hover:ring-teal  transition-all duration-200 rounded focus:outline-none "
                />
              </div>
              <div className="h-full w-[30px] bg-teal rounded-tr-xl rounded-br-xl">
                <button>
                  <img
                    src={search}
                    alt="search"
                    className="   object-contain    p-[6px]  "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Searchbar;
