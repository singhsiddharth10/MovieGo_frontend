import Navbar from '../navbar/Navbar'
import '../mainscreen/mainscreenstyle.css'
import BodyPanel from '../bodypanel/Bodypanel'

export default function MainScreen() {
  return (
    <>
      <div className= "navbar">
        <Navbar></Navbar>
      </div>
      <div className = "body">
        <BodyPanel></BodyPanel>
      </div>
    </>
  )
}
