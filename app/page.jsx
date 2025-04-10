import Image from "next/image";
import Nav from "./components/Nav";
import Splash from "./components/Splash";
import Find from "./components/Find";
import Footer from "./components/Footer";
import Talent from "./components/Talent";

export default function Home() {
  return (
    <div className="min-h-screen home">
      <Nav />
      <Splash />
      <Find />
      <Talent />
      <Footer/>

    </div>
  );
}
