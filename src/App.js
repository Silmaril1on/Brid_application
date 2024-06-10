import "./App.css";
import NavigationBar from "./layout/navigation/NavigationBar";
import { Routes, Route } from "react-router-dom";
import AllProjects from "./pages/allProjects/AllProjects";
import Home from "./pages/home/Home";
import Factory from "./pages/factory/Factory";
import ProjectDetail from "./pages/projectpage/ProjectDetail";

function App() {
  return (
    <main className="w-full center flex-col">
      <section className="center flex-col w-full max-w-[1920px]">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/factory" element={<Factory />} />
          <Route path={"/project-detail/:name"} element={<ProjectDetail />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
