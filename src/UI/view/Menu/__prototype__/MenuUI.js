import React, { useLayoutEffect, useRef, useState } from "react";

import MenuContextUI from "./MenuContextUI";
import MenuNotifierUI from "./MenuNotifierUI";
import MenuQuickActionsUI from "./MenuQuickActionsUI";
import MenuSelectionUI from "../../Selection/SelectionUI";
import SelectionScrollUI from "../../Selection/SelectionScrollUI";
import useHeight from "../../Hooks/useHeight";
import useResizeObserver from "@react-hook/resize-observer";
import usePosition from "../../Hooks/usePosition";

const MenuUI = ({context, notifier, selection, quickActions}) => {
    const topMenuRef    = useRef(null);
    const bottomMenuRef = useRef(null);
    const endOfPageRef  = useRef(null);

    const topMenuHeight     = useHeight(topMenuRef);
    const bottomMenuHeight  = useHeight(bottomMenuRef);

    const bottomMenuPosition    = usePosition(bottomMenuRef);
    const endOfPagePosition     = usePosition(endOfPageRef);

    const [showScrollTop, setShowScrollTop]         = useState(true);
    const [showScrollBottom, setShowScrollBottom]   = useState(true);
    
    const handleScroll  = () => {
        setShowScrollTop(document.documentElement.scrollTop === 0);        
        setShowScrollBottom(Math.ceil(bottomMenuPosition.y) >= Math.floor(endOfPagePosition.y) - 1);
    }

    useLayoutEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    useResizeObserver(topMenuRef, () => {
        handleScroll();
        return handleScroll;
    });

    useResizeObserver(bottomMenuRef, () => {
        handleScroll();
        return handleScroll;
    });

    return (
        <div className="d-flex flex-column">
            <div className="position-fixed top-0 start-0 end-0 bg-white" ref={topMenuRef}>
                <div className="mx-auto bounds">
                    <MenuContextUI 
                        leftAction={context.leftAction}
                        rightAction={context.rightAction}
                        title={context.title}
                        icon={context.icon}
                    />
                    <MenuNotifierUI 
                        className="mt-3"
                        notification1={notifier.length > 0 ? notifier[0]: undefined}
                    />
                    <SelectionScrollUI
                        scrollDirection="up"
                        className="mt-3 mb-4 mx-5"
                        invisible={showScrollTop}
                        canScroll
                    />
                </div>
            </div>
            <MenuSelectionUI
                endOfPageRef={endOfPageRef}
                options={selection}
                style={{
                    paddingTop: topMenuHeight,
                    paddingBottom: bottomMenuHeight
                }}
            />
            <div id="menuBottom" className="position-fixed bottom-0 start-0 end-0 bg-white" ref={bottomMenuRef}>
                <div className="mx-auto bounds">
                    <SelectionScrollUI 
                        scrollDirection="down"
                        className="pt-4 mb-3 mx-5"
                        invisible={showScrollBottom}
                        canScroll
                    />
                    <MenuQuickActionsUI 
                        className="m-4 mt-3"
                        actions={quickActions}
                    />
                </div>
            </div>
        </div>
    )
}

export default MenuUI;