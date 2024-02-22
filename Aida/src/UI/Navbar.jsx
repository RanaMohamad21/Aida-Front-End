// Alhamdulillah Done
const NavbarLinks = [
  { name: "Fashion", link: "/#fashion" },
  { name: "Electronics", link: "/#electronics" },
  { name: "Sports", link: "/#sports" },
  { name: "Health & wellness", link: "/#health-wellness" },
  { name: "Pet supplies", link: "/#pet-supplies" },
  { name: "Children's goods", link: "/#children-goods" },
  { name: "Books", link: "/#books" },
  { name: "Home essentials", link: "/#home-essentials" },
  { name: "Office supplies", link: "/#office-supplies" },
];

function Navbar() {
  return (
    <nav className="w-[100%] bg-teal h-[30px] ">
      <div className="   text-white font-sans py-3 px-5 w-full h-full">
        {/*Menu items*/}
        <ul className="flex justify-between text-nowrap items-center gap-12 h-full">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.link}
                className="inline-block hover:text-IceBlue hover:bg-[#03bbbf] duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
