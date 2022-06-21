import React from "react";
import FooterCss from "./FooterCss";

class Footer extends React.Component{
    render(){
        return(
            <FooterCss>
                <p>
                    By clicking the button, you are agreeing to our <strong>Terms and Services</strong>
                </p>
            </FooterCss>
        )
    }
}

export default Footer;