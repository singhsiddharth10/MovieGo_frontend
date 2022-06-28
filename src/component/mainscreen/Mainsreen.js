import Navbar from '../navbar/Navbar'
import '../mainscreen/mainscreenstyle.css'
import BodyPanel from '../bodypanel/Bodypanel'
import { useLocation } from "react-router-dom";

export default function MainScreen() {
  const location = useLocation();

  return (
    <>
        <Navbar></Navbar>
        <BodyPanel userName = {location.state}></BodyPanel>
      
    </>
  )
}
