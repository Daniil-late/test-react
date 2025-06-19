import { Routes, Route } from "react-router-dom";
import Contact from "../Contact/Contact.jsx";
import Home from "../Home/Home.jsx";
import News from "../News/News.jsx";
export default function AppRouter(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/contacts" element={<Contact/>}></Route>
        </Routes>
    )
}