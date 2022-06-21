import styled from "styled-components";

const FormCss = styled.form`
    margin-top: 2em;
    div{
        margin-bottom: 1em;
    }

    input{
        border: 1px solid var(--grayish-blue);
        width: 100%;
        padding: 1em;
        border-radius: .4em;
    }

    input::placeholder{
        font-weight: bold;
    }

    input[type=submit]{
        text-transform: uppercase;
        background-color: var(--green);
        color: #fff;
        font-weight: bold;
        border-color: var(--green);
        border-bottom: 3px solid #4a8461;
    }
`;

export default FormCss;