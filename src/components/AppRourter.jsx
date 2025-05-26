import { Routes, Route } from "react-router-dom";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import News from "../News/News";
export default function AppRouter(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/contacts" element={<Contact/>}></Route>
        </Routes>
    )
}