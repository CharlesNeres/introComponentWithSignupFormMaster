import React from 'react';
import Advertising from '../advertising/Advertising';
import Form from '../form/Form';
import MainCss from './MainCss';

class Main extends React.Component{
    render(){
        return(
            <MainCss>                
                <Form />                
            </MainCss>
        )
    }
}

export default Main;