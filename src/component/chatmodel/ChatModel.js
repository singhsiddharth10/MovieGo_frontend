import { useEffect, useState } from "react";
import "./chatmodelstyle.css";
export default function ChatModel() {
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
  ]
  const [message,setMessage]  = useState('')
  const [messageData , setMessageData] = useState([])

  useEffect(()=>{
    setMessageData(data)
    console.log(messageData)
  },[])
//   const getInputValue = (event) => {
//     // const userValue = event.target.value;
//     setMessage({...message, message : event.target.value})

//     // console.log(userValue);
//     console.log(message)
//   }

  const handleClick = () => {
    setMessageData([
        ...messageData,
        {
            movie_id: 1,
            user_id: 1,
            message: message,
        }
    ])
    console.log(messageData)
  }
  
  return (
    <>
      <div className="chatheader"> K.G.F Chapter 2 Room</div>
      <div className="chatbody">
        {messageData &&
          messageData.map((index) => {
            if (index.user_id === 1) {
              return <div className="chatMessage"> <p className="right_message"> {index.message}</p> </div>
            } else {
              return <div className="chatMessage"><div className="left_message"> {index.message}</div></div>
            }
          })}
      </div>
      <div className="footer">
        <input className="inputtext" value={message} type="text" onChange={e => setMessage(e.target.value)} />
        <button className="sendbtn" onClick={handleClick}>send</button>
      </div>
    </>
  );
}
