import { useEffect } from "react";
import { useState } from "react";

interface User {
  uid: string;
  username: string;
  email: string;
  profilePic: string;
  bgPic: string;
  followers: number;
  following: number;
}

const Profile: React.FC = () => {
  const [userDetails, setUserDetails] = useState<User | null>(null);

  const fetchUserData = async () => {
    // will create logic to fetch user from access token soon
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return userDetails ? (
    <div>
      <div>
        <img
          className="w-full h-[30vh] object-cover"
          src={userDetails.bgPic}
          alt="Background"
        />
      </div>

      <div className="flex p-10">
        <div className="w-10%">
          <img
            className="w-full rounded-full"
            src={userDetails.profilePic}
            alt="ProfilePic"
          />
        </div>

        <div className="flex flex-row items-center ml-2%">
          <div>
            <h1 className="text-3xl font-bold">{userDetails.username}</h1>
          </div>
          <div className="flex flex-col ml-2%">
            <h1 className="text-3xl">{userDetails.followers} followers </h1>
            <h1 className="text-3xl">{userDetails.following} following</h1>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Loading...</h1>
    </div>
  );
};

export default Profile;
