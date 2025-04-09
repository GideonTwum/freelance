import Image from "next/image";
import Nav from "./components/Nav";
import Splash from "./components/Splash";
import Why from "./components/Why";
import Find from "./components/Find";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen home">
      <Nav />
      <Splash />

      <Find />
      <Contact />
      <Footer/>

    </div>
  );
}
