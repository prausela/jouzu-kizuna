import { Alert } from "react-bootstrap";

const MenuNotifierUI = ({notification1, notification2, className}) => {
    return (
        <div className={(className ? className + " " : "") + "d-flex flex-column px-3"}>
            
            {   notification1 ? (
                    <Alert variant="dark" onClose={() => {}} dismissible key={ 1 } id="notif1">
                        { notification1 }
                    </Alert>) : ""
            }
            {   notification2 ? (
                    <Alert variant="dark" onClose={() => {}} dismissible key={ 2 } id="notif2">
                        { notification2 }
                    </Alert>) : ""
            }
            
        </div>
    )
}

export default MenuNotifierUI;