import styled from "styled-components";

const FormCss = styled.form`
    
    div{
        margin-bottom: 1em;
    }

    input{
        border: 1px solid #d6d4e7;
        width: 100%;
        padding: 1em;
        border-radius: .4em;
    }

    input::placeholder{
        font-weight: bold;
    }

    button{
        text-transform: uppercase;
        background-color: var(--green);
        border-radius: .4em;
        width: 100%;
        padding: 1em;
        color: #fff;
        font-weight: bold;
        border-color: var(--green);
        border-bottom: 3px solid #4a8461;
        cursor: pointer;
    }
`;

export default FormCss;