import React from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class Input extends React.Component{
    constructor(props){
        super(props);
    }    

    render(){  
        return(
            <div>
                <input type={this.props.type} 
                    placeholder={this.props.placeholder} 
                    value={this.props.value} name={this.props.name}
                    onChange={this.props.handleOnChange} />                          
            </div>
        )
    }
}

export default Input;