import Image from "next/image";
import Nav from "./components/Nav";
import Splash from "./components/Splash";
import Why from "./components/Why";
import Find from "./components/Find";

export default function Home() {
  return (
    <div className="min-h-screen home">
      <Nav />
      <Splash />
      <Why />
      <Find />

    </div>
  );
}
