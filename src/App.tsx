import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./page/home/index";
import { Signin } from "./page/signin/index";
import { Info } from "./page/info/index";
import { Bookmark } from "./page/bookmark/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/info" element={<Info />} />
        <Route path="/bookmark" element={<Bookmark />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
