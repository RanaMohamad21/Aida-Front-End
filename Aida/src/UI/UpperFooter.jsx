import logoWhiteTxtAida from "/src/assets/logo/LogoWhiteTextAida.svg";
import babyCarriage from "/src/assets/home/baby-carriage.png";
const iconList = [
  [
    { name: "babyCarriage", alt: "babyCarriage" },
    { name: "babyCarriage", alt: "babyCarriage" },
    { name: "babyCarriage", alt: "babyCarriage" },
  ],
  [
    { name: "babyCarriage", alt: "babyCarriage" },
    { name: "babyCarriage", alt: "babyCarriage" },
    { name: "babyCarriage", alt: "babyCarriage" },
  ],
  [
    { name: "babyCarriage", alt: "babyCarriage" },
    { name: "babyCarriage", alt: "babyCarriage" },
    { name: "babyCarriage", alt: "babyCarriage" },
  ],
];
function UpperFooter() {
  return (
    <div className="bg-teal  flex justify-between items-center px-4 text-white  w-full mb-12  bottom-[49px] ">
      <div className="justify-self-start ">
        <img src={logoWhiteTxtAida} alt="logo" />
        <p className="font-semibold ">Developers</p>
        <ul className="">
          <li>Sara Ahmad Abdelrahim</li>
          <li>Omnia Ahmad El Desoky</li>
          <li>Mustafa Mahmoud Mohamad</li>
          <li>Rana Mohamad Ahmad</li>
          <li>Hanan Saeed Mohamad</li>
        </ul>
      </div>
      <div className="justify-self-end">
        <div className="border-2 p-3px w-[20px]  transition-all duration-200 hover:border-IceBlue ">
          <button>&uarr;</button>
        </div>
        <p>Categories</p>
        <div>
          <div className="flex gap-2">
            <div className="rounded-full bg-white p-[4px]">
              <img src={babyCarriage} />
            </div>

            <div className="rounded-full bg-white p-[4px]">
              <img src={babyCarriage} />
            </div>

            <div className="rounded-full bg-white p-[4px]">
              <img src={babyCarriage} />
            </div>
          </div>
          <div className="flex gap-2 my-[8px]">
            <div className="rounded-full bg-white p-[4px]">
              <img src={babyCarriage} />
            </div>

            <div className="rounded-full bg-white p-[4px]">
              <img src={babyCarriage} />
            </div>

            <div className="rounded-full bg-white p-[4px]">
              <img src={babyCarriage} />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="rounded-full bg-white p-[4px]">
              <img src={babyCarriage} />
            </div>

            <div className="rounded-full bg-white p-[4px]">
              <img src={babyCarriage} />
            </div>

            <div className="rounded-full bg-white p-[4px]">
              <img src={babyCarriage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperFooter;
