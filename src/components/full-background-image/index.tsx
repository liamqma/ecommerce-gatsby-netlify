import React from "react"
import image from './image.jpg';
import { css, keyframes } from '@emotion/css'

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});

const FullBackgroundImage = ({ isUnderMaintenance = false }) => {
    return <div css={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        textAlign: 'center',
        display: 'grid',
        gridTemplateRows: isUnderMaintenance ? '1fr 1fr 1fr 1fr' : '1fr 1fr 1fr',
        color: 'white',
    }}>
        <span css={{
            fontFamily: 'var(--font-heading-family)',
            animation: `${fadeIn} 2s ease-in alternate`,
            fontSize: '16vw',
            gridRowStart: 2,
            gridRowEnd: 3,
            placeSelf: 'center'
        }}>
            MYSA & CO.
        </span>
        {
            isUnderMaintenance &&
            <span css={{
                fontFamily: 'var(--font-body-family)',
                animation: `${fadeIn} 2s ease-in alternate`,
                fontSize: '4vw',
                gridRowStart: 3,
                gridRowEnd: 4,
                placeSelf: 'center'
            }}>
                We will see you soon.
            </span >}
    </div >
}

export default FullBackgroundImage;