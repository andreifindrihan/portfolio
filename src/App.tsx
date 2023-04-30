import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/src/assets/herobg.png')",
            backgroundSize: "cover",
          }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        {/* <Works /> */}
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
