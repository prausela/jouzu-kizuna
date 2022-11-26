import React from "react";
import MainUI from "../../view/Menu/MainUI";

const MainController = ({switchToSelection}) => {
    const selection = [
        {
            "value"   : "レベル　一",
            "onClick" : () => switchToSelection("1")
        }, {
            "value"   : "レベル　ニ",
            "onClick" : () => switchToSelection("2")
        }, {
            "value"   : "レベル　三",
            "onClick" : () => switchToSelection("3")
        }
    ]
    return (
        <MainUI 
            selection={selection}
        />
    )
}

export default MainController;