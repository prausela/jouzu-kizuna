import React from 'react';
import MainMenuUI from './main_menu/MainMenuUI';

const MainMenuController = (props) => {
    const switchToGame = () => props.switchToGameMode("game");
    return (
        <MainMenuUI 
            switchToGame={switchToGame}
        />
    )
}

export default MainMenuController;