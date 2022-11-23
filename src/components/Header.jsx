import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {

  const normalLink = 'w-[50%] h-[100%] flex justify-center items-center rounded-t-full rounded-b-full font-bold'
  const activateLink = `${normalLink} bg-[#61764B]` 

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  const hideMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  };

  return (
    <header className="flex flex-row w-[100vw] h-[5vh] bg-[#9BA17B] lg:w-[50vw]">
      <div className="w-[60%] flex justify-center items-center gap-4 rounded-lg sm:justify-start sm:pl-8 lg:p-3 lg:w-[40%]">
        <FontAwesomeIcon icon={faWallet} />
        <h2 className="font-bold">INCOME CALCULATOR</h2>
      </div>
      <nav className="w-[70%] hidden  lg:flex">
        <NavLink to="/"className={({isActive})=>(isActive?activateLink:normalLink)}>
          INCOME
        </NavLink>
        <NavLink to="/income_details" className={({isActive})=>(isActive?activateLink:normalLink)}>
          INCOME DETAILS
        </NavLink>
      </nav>
      <div className="w-[40%] flex items-center justify-end pr-5 lg:hidden">
        <FontAwesomeIcon
          className="h-[70%]"
          icon={faBars}
          onClick={toggleMobileMenu}
        />
      </div>
      <div
        id="mobileMenu"
        className="hidden flex-col w-[45vw] h-[95vh] z-1 bg-[#9ba17b] absolute top-[5vh] pt-10 pl-5 gap-5"
      >
        <NavLink to="/" className='hover:text-[#f5e8c7] font-semibold' onClick={hideMobileMenu}>
          INCOME
        </NavLink>
        <NavLink className='hover:text-[#f5e8c7] font-semibold' to="/income_details" onClick={hideMobileMenu}>
          INCOME DETAILS
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
