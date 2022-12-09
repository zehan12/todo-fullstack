import React, { Fragment, useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const Confetti = ( { show } ) => {
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth, height: window.innerHeight
    })

    const detectSize = () => {
        setWindowDimension({
            width: window.innerWidth, height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimension]);

    return (
        <Fragment>
            {
            show &&
            <ReactConfetti
                width={windowDimension.width}
                height={windowDimension.height}
                tweenDuration={3000}
            /> 
            }
        </Fragment>
    )
}


export default Confetti;