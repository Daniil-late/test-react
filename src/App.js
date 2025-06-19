import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Blocks/Navbar'
import AppRouter from './components/AppRourter.jsx'

import Footer from "./Blocks/Footer";



export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <AppRouter />
      <Footer></Footer>
    </Router>
  )
}
