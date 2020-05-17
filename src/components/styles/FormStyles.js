import styled from 'styled-components';
import is from 'styled-is';

const FormStyles = styled.div`
    ${is('autocomplete')`
        position: relative;
        z-index: 1;
    `};

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
        color: var(--dark-grey);
    }

    input::placeholder {
        color: #808080;
        opacity: 1;
    }
`;

export default FormStyles;
