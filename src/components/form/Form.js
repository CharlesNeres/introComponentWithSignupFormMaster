import React from "react";
import FormCss from "./FormCss";

class Form extends React.Component{
    render(){
        return(
            <FormCss>
                <div>
                    <input type="text" placeholder="First Name"/>
                </div>
                <div>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <div>
                    <input type="email" placeholder="Email Address"/>
                </div>
                <div>
                    <input type="password" placeholder="Password"/>
                </div>
                <div>
                    <input type="submit" value="claim your free trial" />
                </div>
            </FormCss>
        )
    }
}

export default Form;