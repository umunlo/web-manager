import{ useEffect } from "react";

export const Bookmark = () => {
  useEffect(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }, []);

  return <div></div>;
};
