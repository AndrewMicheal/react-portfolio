import Home from "./Components/Home/Home"
import Contact from "./Components/Contact/Contact";
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';

let routing = createBrowserRouter([
  {path : "" , element: <Layout /> , children : [
    { index : true , element: <Home />} , 
    {path : "about" , element: <About />} , 
    {path : "portfolio" , element: <Portfolio />} , 
    {path : "contact" , element: <Contact />}
  ]}
])

function App() {

  return (
    <>
    <RouterProvider router = {routing}></RouterProvider>
    </>
  )
}

export default App
