import React from 'react';
import Form from '../form/Form';
import MainCss from './MainCss';
import Footer from '../footer/Footer';

class Main extends React.Component{
    render(){
        return(
            <MainCss>                
                <Form />                
                <Footer />
            </MainCss>
        )
    }
}

export default Main;