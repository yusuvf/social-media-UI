import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Topic from "./pages/Topic";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path=":profileId" element={<Profile />} />
          <Route path=":profileId/post/:postId" element={<Post />} />
          <Route path="discover" element={<Discover />} />
          <Route path="topic/:topicId" element={<Topic />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
