import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="flex flex-row w-[50vw]  bg-[#9BA17B] h-10">
      <div className="w-[30%] flex justify-center items-center gap-4 rounded-lg">
        <FontAwesomeIcon icon={faWallet} />
        <h2 className="font-bold">Income calculator</h2>
      </div>
      <nav className="w-[70%] flex justify-center items-center">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            background: isActive ? "#61764B" : "#9BA17B",
          })}
          className="w-full h-[100%] flex justify-center items-center rounded-t-full rounded-b-full font-bold"
        >
          INCOME
        </NavLink>
        <NavLink
          to="/income_details"
          style={({ isActive }) => ({
            background: isActive ? "#61764B" : "#9BA17B",
          })}
          className="w-full h-[100%] flex justify-center items-center rounded-t-full rounded-b-full font-bold"
        >
          INCOME DETAILS
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
