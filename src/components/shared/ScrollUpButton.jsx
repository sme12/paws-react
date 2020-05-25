import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

/**
 * Tween function taken from https://github.com/chenglou/tween-functions
 */
const easeOutCubic = (currentTime, beginValue, endValue, totalDuration) => {
    const delta = endValue - beginValue;
    return delta * ((currentTime = currentTime / totalDuration - 1) * currentTime * currentTime + 1) + beginValue;
    };
    
const UpButtonStyles = styled.div`
    button {
        position: fixed;
        bottom: 90px;
        right: calc(50% - 1200px / 2 + 24px);
        display: block;
        width: 48px;
        height: 20px;
        border: 0;
        background-color: transparent;
        background-image: url('./icon-up.svg');
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
        transition: transform .3s;
        transform: translate3d(0, ${props => props.show ? '0' : 'calc(90px + 100%)'}, 0);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // Prevent default tap higlighting on the mobile
    }
`;

const ScrollUpButton = () => {
    const refObservableElement = React.createRef();
    const [show, setShow] = useState( false );

    const handleIntersect = (entries) => {
        entries.forEach(entry => {
            setShow( !entry.isIntersecting );
        });
    }
    const observer = useRef(
        new IntersectionObserver(handleIntersect)
    );
    const data = {
        startValue: 0,
        endValie: 0,
        duration: 250,
        currentTime: 0,
        startTime: null,
        rafId: null
    };

    useEffect(() => {
        const { current: currentObserver } = observer;
        currentObserver.observe(refObservableElement.current);
        return () => currentObserver.disconnect();
    });

    /**
     * Calculate new position and scroll screen to new position
     * @param timestamp
     */
    const scrollStep = (timestamp) => {
        if (!data.startTime) {
            data.startTime = timestamp;
        }

        data.currentTime = timestamp - data.startTime;

        const position = easeOutCubic(
            data.currentTime,
            data.startValue,
            data.endValie,
            data.duration
        );

        if (window.pageYOffset <= 0) {
            window.cancelAnimationFrame(data.rafId);
        } else {
            window.scrollTo(window.pageYOffset, position);
            data.rafId = window.requestAnimationFrame(scrollStep);
        }
    }

    /**
     * Handle click on the button
     */
    const handleClick = (event) => {
        event.target.blur();
        data.startValue = window.pageYOffset;
        data.currentTime = 0;
        data.startTime = null;
        data.rafId = window.requestAnimationFrame(scrollStep);
    }

    return (
        <div>
            <UpButtonStyles show={show}>
                <button
                    type="button"
                    onClick={handleClick}
                >
                </button>
            </UpButtonStyles>
            <div 
                ref={refObservableElement}
                id="dummy"
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    height: '100vh',
                    width: '1px',
                }}
            >
            </div>
        </div>
    );
};

export default ScrollUpButton;
