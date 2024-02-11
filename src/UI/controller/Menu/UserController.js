import UserUI from "../../view/Menu/UserUI";

const UserController = ({switchToMain}) => {
    return (
        <UserUI 
            switchToMain={switchToMain}
        />
    )
}

export default UserController;