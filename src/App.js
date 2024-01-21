import './globalStyles.css';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import MyWork from "./components/MyWork/MyWork";
import WhereWork from "./components/WhereWork/WhereWork";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Slider></Slider>
            <About></About>
            <Portfolio></Portfolio>
            <MyWork></MyWork>
            <Contact></Contact>
            <WhereWork></WhereWork>
            <Footer></Footer>
        </div>
    );
}

export default App;
