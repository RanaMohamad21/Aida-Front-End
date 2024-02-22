import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";
import microphone from "/src/assets/home/microphoneWhite.png";
import search from "/src/assets/home/search.png";
function Searchbar() {
  return (
    <nav className="w-screen  bg-white px-9 my-[4px]  justify-between flex  ">
      {/* Search Bar Section */}
      
        {/*Logo start*/}
        <div className="  ">
          <img
            src={logoWhiteTxtAida}
            alt="Logo"
            className="h-[40px] mt-[2px]  "
          />
        </div>
        {/* Logo end */}
        {/* Search start */}
        <form action="">
          <div className="w-max flex items-center p-[1px]  rounded-2xl">
            <span className="bg-teal py-2 px-1 rounded-tl-2xl rounded-bl-2xl h-[40px]">
              <img
                src={microphone}
                alt="microphone"
                className="h-full   object-contain w-[30px] "
              />
            </span>
            <input
              type="search"
              placeholder="Search"
              className="mx-[8px] outline-none border-none hover:ring-2 hover:ring-teal hover:px-1  transition-all duration-600 rounded focus:outline-none h-[30px] hover:w-[300px] ease-in-out"
            />
            <span className="bg-teal p-1 rounded-tr-2xl rounded-br-2xl h-[40px]">
              <img
                src={search}
                alt="search"
                className="   object-contain    p-[6px]  "
              />
            </span>
          </div>
        </form>
        {/* Search end */}
    </nav>
  );
}

export default Searchbar;

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
          className=" h-full mt-[1px] border-none md:w-[400px]   hover:ring-2 hover:ring-teal hover:px-1  transition-all duration-200 rounded focus:outline-none "
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
</div>;
