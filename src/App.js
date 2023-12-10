import { useEffect } from "react";
import Carrer from "./components/Carrer";
import GithubRepositories from "./components/GithubRepositories";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import './styles/header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "./components/Contact";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 500,
    });

    document.documentElement.style
      .setProperty('--textColor', "#4F725E");
  }, []);



  return (

    <div className="bg-mainColor z-0 relative text-white font-connary ">
      <script>
        AOS.init({});
      </script>
      <div className="absolute top-0 right-0 m-8 inner-gradient-6"></div>
      <div className="absolute opacity-5 -z-50 w-1 h-full left-1/4 bg-textColor"></div>
      <div className="absolute opacity-5 -z-50 w-1 h-full left-2/4 bg-textColor"></div>
      <div className="absolute opacity-5 -z-50 w-1 h-full left-3/4 bg-textColor"></div>

      <Header />
      <Carrer />
      <Technologies />
      <GithubRepositories />
      <Contact />

    </div>
  );
}

export default App;
