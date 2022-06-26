import { useState } from "react";
import "./authscreenstyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function AuthScreen() {
  const navigate = useNavigate();
  const [btn, setBtn] = useState(true);
  const [btnText, setBtnText] = useState("Login");
  const [footerText, setFooterText] = useState("Register");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFooterClick = () => {
    setBtn(!btn);
    if (btn) {
      setBtnText("Register");
      setFooterText("Login");
    } else {
      setBtnText("Login");
      setFooterText("Register");
    }
  };
  const handleBtnClick = async () => {
    const formdata = `email=${userName}&password=${password}`
    if (btn) {
      await axios({
        method: "post",
        url: `http://localhost:8080/MovieGo/CheckUser`,
        data: formdata
      })
        .then(function (response) {
          if(response.data === "success"){
            navigate("/MainScreen")
          }
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  };
  return (
    <div className="parentContainer">
      <div className="childContainer">
        <div className="authContainer">
          <div className="authHeader">
            <p>Welcome to MovieGO</p>
          </div>
          <div className="authBody">
            <input
              className="inputtextAuth"
              placeholder="Username"
              value={userName}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="inputtextAuth"
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginbtn" onClick={handleBtnClick}>
              {btnText}
            </button>
            <div className="authfooter">
              <p className="footerText">New to MovieGo?</p>
              <div className="Regsiter" onClick={handleFooterClick}>
                {footerText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
