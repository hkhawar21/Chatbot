import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import Colors from "../../assets/color";

const ChatBody = () => {
  return (
    <div
      className="main__chatbody"
      style={{ backgroundColor: Colors.background }}
    >
      <ChatContent />
    </div>
  );
};

export default ChatBody;
