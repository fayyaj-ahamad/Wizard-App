import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Block from "./pages/Block";
import Card from "./pages/Card";
import Case from "./pages/Case";
import Header from "./pages/Header";
import Images from "./pages/Images";
import Service from "./pages/Service";

const App = () => {
  return (
    <>
     <Navbar />
     <Header />
     <Images />
     <Service />
     <Card />
     <Block />
     <Case />
     <Footer />
    </>
  );
}

export default App;