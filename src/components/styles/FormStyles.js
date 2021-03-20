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

    input,
    select {
        width: 100%;
        padding: 16px 6px;
        font-size: var(--font-size-2);
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

    .error-message {
        height: 18px;
        padding-top: 8px;
        color: var(--danger);
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        color: var(--weak-grey);
        background-image: url('icon-down.svg');
        background-repeat: no-repeat;
        background-position: center right 16px;
    }

    option {
        color: var(--grey);

        &:disabled {
            display: none;
        }
    }
`;

export default FormStyles;
