import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./searchbar.tsx";

const logo = "/icon transparent.png";
const notifs = "/bell-icon.svg";
const settings = "cogwheel.png";

interface User {
  uid: string;
  username: string;
  email: string;
  profilePic: string;
}

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isTokenValid, setIsTokenValid] = useState(false);

  const fetchUserData = async () => {
    const token = localStorage.getItem("access_token");
    if (token) setIsTokenValid(true);
    else setIsTokenValid(false);
    // will create logic to get user data from the access token in the future
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  }

  const handleProfileClick = () => {
    window.location.href = "/profile";
  };

  return (
    <div className="bg-navbar flex items-center p-0 text-black">
      <img src={logo} alt="Logo" className="h-8% w-4%" />

      <div className="flex ml-5 w-20% justify-between text-lg">
        <div>
          <NavLink to="/" id="home-link">
            HOME
          </NavLink>
        </div>

        <div>
          <NavLink to="/categories" id="categories-link">
            CATEGORIES
          </NavLink>
        </div>

        <div>
          <NavLink to="/leaderboard" id="leaderboard-link">
            LEADERBOARD
          </NavLink>
        </div>
      </div>

      <SearchBar />

      {!isTokenValid ? (
        <div className="ml-auto mr-5 text-black">
          <NavLink to="/login" id="login-link">
            LOG IN
          </NavLink>
        </div>
      ) : (
        <>
          {/* <div
            onClick={handleProfileClick}
            className="flex gap-3 items-center w-5% ml-auto mr-2% hover:cursor-pointer"
          >
            <img
              src={user.profilePic}
              alt="pfp"
              className="w-60% rounded-full border-1 border-black"
            />

            <h1 className="text-black">{user.username}</h1>
          </div> */}

          <div className="flex gap-3 items-center w-5% ml-auto mr-2%">
            <img
              src={notifs}
              alt="Notifs"
              className="w-60% hover:cursor-pointer"
            />

            <img
              src={settings}
              onClick={handleLogout}
              alt="Settings"
              className="w-45% hover:cursor-pointer"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
