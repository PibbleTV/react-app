import { NavLink } from "react-router-dom";
import SearchBar from "../navbar/searchbar.tsx";

const logo = "/icon transparent.png";

const Navbar: React.FC = () => {

  return (
    <div className="bg-navbar flex items-center p-0 text-black">
      <img src={logo} alt="Logo" className="h-8% w-4%" />

      <div className="flex ml-5 w-20% justify-between text-lg">
        <NavLink to="/" id="home-link" data-testid="btnHome">
          HOME
        </NavLink>
        <NavLink to="/categories" id="categories-link" data-testid="btnCategories">
          CATEGORIES
        </NavLink>
        <NavLink to="/leaderboard" id="leaderboard-link" data-testid="btnLeaderboard">
          LEADERBOARD
        </NavLink>
      </div>

      <SearchBar />

     
        <div className="ml-auto mr-5 text-black">
          <NavLink to="/login" id="login-link" data-testid="btnLogIn">
            LOG IN
          </NavLink>
        </div>

      
    </div>
  );
};

export default Navbar;
