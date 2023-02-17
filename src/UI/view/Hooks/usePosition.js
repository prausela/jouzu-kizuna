import { useLayoutEffect, useState } from "react";

const usePosition = (target) => {
    const [positionX, setPositionX] = useState();
    const [positionY, setPositionY] = useState();

    const setPosition = (x, y) => {
        setPositionX(x);
        setPositionY(y);
    }

    useLayoutEffect(() => {
        const setCurrentPosition = () => {
            const currPosition = target.current.getBoundingClientRect();
            setPosition(currPosition.x, currPosition.y);
        }

        setCurrentPosition();
        window.addEventListener('scroll', setCurrentPosition);
        window.addEventListener('touchmove', setCurrentPosition);
        window.addEventListener('resize', setCurrentPosition);

        return () => {
            window.removeEventListener('scroll', setCurrentPosition);
            window.removeEventListener('touchmove', setCurrentPosition);
            window.removeEventListener('resize', setCurrentPosition);
        }
    }, [target]);

    return ({ 
            x : positionX,
            y : positionY
    });
}

export default usePosition;