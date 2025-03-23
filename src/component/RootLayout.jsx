import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      // Simulate loading for 2 seconds (replace this with actual data fetch)
      setTimeout(() => setLoading(false),500);
    };

    // Trigger loading state on route change
    handleRouteChange();
  }, [location]); // Depend on location to handle route changes
  return (
    <>
      <Header />
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
};

export default RootLayout;
