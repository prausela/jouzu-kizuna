import React, { useEffect, useState } from "react";
import CategoryLocalDao from "../../../data/access/local/CategoryLocalDao";
import MainUI from "../../view/Menu/MainUI";

const MainController = ({switchToSelection, notifications}) => {

    const [selection, setSelection] = useState([]);

    /*const selection = [
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
    ]*/

    useEffect(() => {
        CategoryLocalDao.getAllCategories().then((cats) => {
            setSelection(cats.map(c => ({
                value   : c.name,
                onClick : () => switchToSelection(c._id, c.name)
            })));
        });
    }, [switchToSelection]);

    return (
        <MainUI 
            selection={selection}
            notifications={notifications}
        />
    )
}

export default MainController;