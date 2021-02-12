import styled from 'styled-components';
import is from 'styled-is';

const FormStyles = styled.div`
    ${is('autocomplete')`
        position: relative;
        z-index: 2;
    `};

    label {
        display: block;
        font-size: var(--font-size-2);
        font-weight: 700;
        margin-bottom: 16px;
    }

    input {
        width: 100%;
        padding: 16px 6px;
        font-size: var(--font-size-1);
        line-height: 1.171875;
        border: 2px solid #ddd;
        border-radius: 8px;
        background-color: #ddd;
        color: var(--dark-grey);

        &:disabled {
            opacity: .7;
        }

        ${is('invalid')`
            border-color: var(--danger);
        `};
    }

    input::placeholder {
        color: #808080;
        opacity: 1;
    }

    input:disabled::placeholder  {
        opacity: .5;
    }
`;

export default FormStyles;
