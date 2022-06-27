import { useEffect, useState } from "react";
import "./chatmodelstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessageList } from "../store/action/fetchMessageListAction";
import axios from "axios";
export default function ChatModel(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const fetchMessage = async() => {
    const param = `movieId=${props.filmId}`
    await axios({
      method: "post",
      url: `http://localhost:8080/MovieGo/Message`,
      data : param

    })
      .then(function (response) {
        if (response.data.length > 0) {
          dispatch(fetchMessageList(response.data));
          console.log("esponse.data",response.data)
          
        } else {
         
        }
      })
      .catch(function (response) {
        console.log(response);
      });

  };

  

  useEffect(() => {
    fetchMessage();
  }, [])

  const messageList = useSelector(
    (state) => state.chatmessageReducer.messageList
  );
  console.log("messageList",messageList)


  const handleClick = async() => {
    const param = `movieDetail=${props.filmId}&userDetail=${1}&message=${message}`
    var tempData = [{ movieDetail: 1, userDetail: 1, message: message }];
    dispatch(fetchMessageList([...messageList, ...tempData]));
    setMessage("");
    await axios({
      method: "post",
      url: `http://localhost:8080/MovieGo/AddMessage`,
      data : param

    })
      .then(function (response) {
        if (response.data.length > 0) {

          
        } else {
         
        }
      })
      .catch(function (response) {
        console.log(response);
      });
    
   
  };


  return (
    <>
      <div className="chatheader">
        <div className="chatheadertitle">K.G.F Chapter 2 Room</div>
        <div
          className="closeIcon"
          onClick={() => props.setShowChatScreen(false)}
        >
          <FontAwesomeIcon icon={faXmark} color="aliceblue" />
        </div>
      </div>
      <div className="chatbody">
        {messageList &&
          messageList.map((index) => {
            if (index.userDetail === 1) {
              return (
                <>
                  <p className="right_message">
                    <p className="username">sid</p>
                    {index.message}
                  </p>{" "}
                </>
              );
            } else {
              return (
                <>
                  <div className="left_message"> {index.message}</div>
                </>
              );
            }
          })}
      </div>
      <div className="footer">
        <input
          className="inputtext"
          value={message}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendbtn" onClick={handleClick}>
          Send
        </button>
      </div>
    </>
  );
}
