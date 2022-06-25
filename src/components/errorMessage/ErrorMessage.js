import React from "react";

class ErrorMessage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const errors = this.props.errors;
        const name = this.props.name;
        
        return (
            <>
                {errors[name].length > 0 && 
                    <span className='error'>{errors[name]}</span>
                }
            </>
        )
    }
}

export default ErrorMessage;