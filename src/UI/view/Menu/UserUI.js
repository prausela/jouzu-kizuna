import { faHouse, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const UserUI = ({switchToMain}) => {
    return (
        <div className="bg-dark d-flex flex-column text-white vh-100 user">
            <div
                className="d-flex flex-column align-items-end"
            >
                <Button
                    variant="light px-3 py-2 rounded-0" style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 80%)"
                    }}
                    onClick={switchToMain}
                >
                    <FontAwesomeIcon icon={faHouse}/>
                    <br />
                    <small>Volver</small>
                </Button>
            </div>
            <div
                className="d-flex flex-grow-1 flex-column align-items-center px-5 pt-5 justify-content-between pb-5"
            >
                <p>
                    <span className="text-big">こんにちは、</span>
                    <br />
                    <strong>
                        <span className="text-extremely-big">Pau</span>
                        <span className="text-big-2"> さん！</span>
                    </strong>
                </p>
                <Button
                    variant="light"
                    className="mt-5 rounded-pill text-big pe-5 ps-4 mb-5"
                >
                    <FontAwesomeIcon icon={faKey} className="pe-3"/>
                    <strong>Cerrar Sesión</strong>
                </Button>
            </div>
            
        </div>
    )
}

export default UserUI;