import useResizeObserver from "@react-hook/resize-observer";
import { useLayoutEffect, useState } from "react";

const useWidth = (target) => {
    const [width, setWidth] = useState();

    useLayoutEffect(() => {
        setWidth(target.current.offsetWidth)
    }, [target]);

    useResizeObserver(target, (entry) => {
        return setWidth(entry.contentRect.width);
    });
    return width;
}

export default useWidth;