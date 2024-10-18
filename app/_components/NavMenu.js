import Link from "next/link";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Contact", path: "/contact" },
  { name: "Order", path: "/order" },
];

const NavMenu = ({ isOpen }) => {
  return (
    <div
      className={`menu z-50 absolute h-fit w-full bg-dark-900 ${
        !isOpen ? "-top-[100vh]" : "top-[12vh]"
      }  left-0 transition-all duration-700 ease-linear   `}
    >
      <ul className="nav__list flex  flex-col p-12 py-8">
        {menuItems.map((item, index) => (
          <li className="" key={index}>
            <Link className="block p-4" href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
