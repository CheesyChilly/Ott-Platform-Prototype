import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Register from "../register/Register";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="homePage">
      {isAuthenticated &&
        !isLoading && ( // Check for authentication and loading
          <>
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
          </>
        )}
      {!isAuthenticated &&
        !isLoading && ( // Check for authentication and loading
          <>
            <Register />
          </>
        )}
    </div>
  );
};

export default Home;
