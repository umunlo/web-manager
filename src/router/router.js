import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  return {
    navigateHome: () => navigate("/"),
    navigateSignin: () => navigate("/signin"),
    navigateInfo: () => navigate("/info"),
    navigateBookmark: () => navigate("/bookmark"),
    navigateStorage: () => navigate("/storage"),
  };
};
