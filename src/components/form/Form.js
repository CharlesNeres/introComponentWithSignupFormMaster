import React from "react";
import FormCss from "./FormCss";
import Input from "../input/Input";
import ErrorMessage from "../errorMessage/ErrorMessage";
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}
  

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        let errors = this.state.errors;

        switch(name){
            case 'firstName':
                errors.firstName = value.length < 5 
                ? 'First Name must be 5 characters long!'
                : ''; 
            break;

            case 'lastName':
                errors.lastName = value.length < 5 
                ? 'Last Name must be 5 characters long!' 
                : '';
            break;
            
            case 'email':
                errors.email = validEmailRegex.test(value)
                ? '' 
                : 'Email is not valid!';
            break;
            
            case 'password':
                errors.password = value.length < 8 
                ? 'Password must be 8 characters long!' 
                : '';
            break;

            default:
                break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit(e){
        e.preventDefault();     
        if(validateForm(this.state.errors)){
            console.info('Valid form');
        }else{
            console.error('Invalid Form');
        }
    }

    render(){  
        const {errors} = this.state;
              
        return(
            <FormCss onSubmit={this.handleSubmit}>                
                <Input type="text" placeholder="First Name" 
                       value={this.state.firstName} name="firstName"
                       handleOnChange={this.handleChange}/>      
                       <ErrorMessage errors={errors} name="firstName"/>                       
        
                <Input type="text" placeholder="Last Name" 
                       value={this.state.lastName} name="lastName"
                       handleOnChange={this.handleChange} /> 
                       <ErrorMessage errors={errors} name="lastName"/>

                <Input type="email" placeholder="Email Address" 
                       value={this.state.email} name="email"
                       handleOnChange={this.handleChange} />
                       <ErrorMessage errors={errors} name="email"/>

                <Input type="password" placeholder="Password" 
                       value={this.state.password} name="password"
                       handleOnChange={this.handleChange} />
                       <ErrorMessage errors={errors} name="password"/>
                       
                <div>
                    <button type="submit">claim your free trial</button>
                </div>
            </FormCss>
        )
    }
}

export default Form;