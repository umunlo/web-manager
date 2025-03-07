import { useNavigate } from "react-router-dom";
import { Router } from "./routerType";

const useRouter = (): Router => {
  const navigate = useNavigate();

  return {
    navigateHome: () => navigate("/"),
    navigateSignin: () => navigate("/signin"),
    navigateInfo: () => navigate("/info"),
    navigateBookmark: () => navigate("/bookmark"),
    navigateStorage: () => navigate("/storage"),
  };
};

export default useRouter;
