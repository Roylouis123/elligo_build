import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useDispatch } from 'react-redux';
import Navigation from "../components/Navigation";
import { logout } from "../redux/counterSlice";

const Layout: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => setUserInfo(await Auth.currentUserInfo()))();
  }, []);

  const handleSignOutClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    await Auth.signOut();
    dispatch(logout());
  };

  return (
    <div style={{top: 0, bottom: 0, left: 0, right: 0, position: 'inherit'}}>
      <div>
         <Navigation
          userInfo={userInfo}
          handleSignOutClick={handleSignOutClick}
        />
        <div className="container mt-6 mb-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
