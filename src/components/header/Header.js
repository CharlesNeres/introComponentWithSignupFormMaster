import React from "react";
import HeaderCss from "./HeaderCss";

class Header extends React.Component{
    render(){
        return(
            <HeaderCss>
                <h1>Learn to code by watching others</h1>
                <p>
                    See how experienced developers solve problems in real-time. 
                    Watching scripted tutorials is great, but understanding how 
                    developers thing is invaluable.                
                </p>
            </HeaderCss>
        )
    }
}

export default Header;