import React from "react";
import Avatar from "../chatList/Avatar";
import "./intro.scss";
import 'animate.css';

const Intro = (props) => {
    return ( 
        <div className="container animate__animated animate__backInUp animate__delay-2s">
        <Avatar  style={{width:"120px",height:"120px"}}
            image="https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif"
            
        />
        <h1>Hello!!</h1>
        <h2>How can i help you</h2>
            <a href="#" onClick={props.onPress} className="button">START</a>
        </div>
        
     );
}
 
export default Intro;