import React, { useState } from "react";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import Colors from "../../assets/color";
import Intro from "./intro";
import axios from "axios";
import botImage from "../../assets/bot-image.jpg";
import userImage from "../../assets/user-image.jfif";

const ChatContent = () => {
  const [msg, setMsg] = useState("");
  const [isReady, setIsReady] = useState(true);
  const [messages, setMessages] = useState([
    {
      type: "other",
      msg: "Hi, I am Neuron",
    },
  ]);

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const handleStart = () => {
    setIsReady(false);
  };

  const addMessageChat = (message, user) => {
    let allChats = messages;
    allChats.push({ type: user, msg: message });
    setMessages(allChats);
  };

  const sendMsg = async () => {
    addMessageChat(msg, "me");
    console.log(messages);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ message: msg });

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/predict",
        body,
        config
      );
      addMessageChat(res.data.answer, "other");
      setMsg("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif"
            />
            <p>Bot</p>
          </div>
        </div>
      </div>

      <div
        className="content__body"
        style={{ backgroundColor: Colors.primary }}
      >
        {isReady === true ? (
          <Intro onPress={handleStart} />
        ) : (
          <div className="chat__items">
            {messages.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={index}
                  user={itm.type === "other" ? "other" : "me"}
                  msg={itm.msg}
                  image={itm.type === "other" ? botImage : userImage}
                />
              );
            })}
          </div>
        )}
      </div>

      {isReady ? (
        ""
      ) : (
        <div className="content__footer">
          <div className="sendNewMessage">
            <input
              type="text"
              placeholder="Type a message here"
              onChange={handleChange}
              value={msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane" onClick={() => sendMsg(msg)}></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatContent;
