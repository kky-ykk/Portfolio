
import NavBar from "./components/Nav_bar";
import BodyContainer from "./components/BodyContainer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <div className="MainContainer">

        <NavBar></NavBar>

        <BodyContainer>
            <Outlet></Outlet>                  {/* url's component shown based on router */}
        </BodyContainer>
        
      </div>
    </>
  )
}

export default App
