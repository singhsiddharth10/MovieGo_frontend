import { useState } from "react";
import "./authscreenstyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function AuthScreen() {
  const navigate = useNavigate();
  const [btn, setBtn] = useState(true);
  const [btnText, setBtnText] = useState("Login");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [invalidRegister, setInvalidRegister] = useState(false);

  const handleFooterClick = () => {
    setBtn(false);
    setBtnText("Register");
    
  };
  const handleBtnClick = async () => {
    const formdata = `email=${userName}&password=${password}`;
    if (btn) {
      await axios({
        method: "post",
        url: `http://localhost:8080/MovieGo/CheckUser`,
        data: formdata,
      })
        .then(function (response) {
          if (response.data === "success") {
            setInvalidLogin(false);
            navigate("/MainScreen");
          } else {
            setInvalidLogin(true);
          }
        })
        .catch(function (response) {
          console.log(response);
        });
    } else {
      await axios({
        method: "post",
        url: `http://localhost:8080/MovieGo/RegisterUser`,
        data: formdata,
      })
        .then(function (response) {
          if (response.data === "success") {
            setInvalidRegister(false);
            setBtn(true)
            setBtnText("Login");
          } else {
            setInvalidRegister(true);
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
          {btn === true ? (
            invalidLogin === true ? (
              <div className="ivalidCred">Invalid Credentials</div>
            ) : null
          ) : invalidRegister === true ? (
            <div className="ivalidCred">User already registered</div>
          ) : null}
          <div className="authBody">
            <input
              className="inputtextAuth"
              s
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
            {btn === true ? (
              <div className="authfooter">
                <p className="footerText">New to MovieGo?</p>
                <div className="Regsiter" onClick={handleFooterClick}>
                Register
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
