import './App.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Route, Routes} from "react-router";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Club from "./Pages/Club/Club";
import BackEnd from "./Pages/AboutCourses/BackEnd/BackEnd";
import FrontEnd from "./Pages/AboutCourses/FrontEnd/FrontEnd";
import UiUx from "./Pages/AboutCourses/UiUx/UiUx";

function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path={`/about-us`} element={<AboutUs/>}/>
                <Route path={`/club`} element={<Club/>}/>
                <Route path={`/back-end`} element={<BackEnd/>}/>
                <Route path={`/front-end`} element={<FrontEnd/>}/>
                <Route path={`/ui-ux`} element={<UiUx/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
