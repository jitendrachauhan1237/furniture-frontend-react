import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change to "auto" for instant scroll
    });
  }, [pathname]);
};

export default useScrollToTop;
