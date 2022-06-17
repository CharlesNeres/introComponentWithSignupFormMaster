import React from 'react';
import Advertising from '../advertising/Advertising';
import Form from '../form/Form';

class Main extends React.Component{
    render(){
        return(
            <>
                <Advertising />
                <Form />
            </>
        )
    }
}

export default Main;