import { useNavigate } from "react-router-dom";
import { Router } from "./routerType";

const useRouter = (): Router => {
  const navigate = useNavigate();

  return {
    navigateHome: () => navigate("/"),
    navigateSignin: () => navigate("/signin"),
    navigateInfo: () => navigate("/info"),
    navigateAdd: () => navigate("/add"),
  };
};

export default useRouter;
