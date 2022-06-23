import { useEffect, useState } from "react";
import "./chatmodelstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessageList } from "../store/action/fetchMessageListAction";
export default function ChatModel(props) {
  console.log("props",props);
  const dispatch = useDispatch();
  const fetchMessage = () => {
    const data = [
      {
        movie_id: 1,
        user_id: 1,
        message: "h1",
        time: "2022-06-21 16:48:00",
      },
      {
        movie_id: 1,
        user_id: 2,
        message: "h2",
        time: "2022-06-21 16:49:00",
      },
      {
        movie_id: 1,
        user_id: 1,
        message: "h3",
        time: "2022-06-21 16:50:00",
      },
      {
        movie_id: 1,
        user_id: 2,
        message: "h4",
        time: "2022-06-21 16:51:00",
      },
    ];
    dispatch(fetchMessageList(data));
  };

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage();
  }, [])

  const messageList = useSelector(
    (state) => state.chatmessageReducer.messageList
  );
  console.log("messageList",messageList)


  const handleClick = () => {
    var tempData = [{ movie_id: 1, user_id: 1, message: message }];
    dispatch(fetchMessageList([...messageList, ...tempData]));
    setMessage("");
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
            if (index.user_id === 1) {
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
