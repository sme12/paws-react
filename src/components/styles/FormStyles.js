import styled from 'styled-components';

const FormStyles = styled.div`
    label {
        display: block;
        font-size: var(--font-size-2);
        font-weight: 700;
        margin-bottom: 16px;
    }

    input {
        width: 100%;
        padding: 18px 8px;
        font-size: var(--font-size-1);
        line-height: 1,171875;
        border: none;
        border-radius: 8px;
        background-color: #ddd;
    }

    input::placeholder {
        color: #808080;
        opacity: 1;
    }
`;

export default FormStyles;
