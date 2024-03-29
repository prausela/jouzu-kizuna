import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginUI = ({setIsAuth}) => {

    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    const handleAccept = () => {
        setIsAuth(true);
    }

    const handleEnter = (event) => {
        if(event.key === "Enter") {
            handleAccept();
        }
    }

    return (
        <div
            className="px-5 d-flex flex-column vh-100 align-items-center justify-content-between w-100 pb-5"
        >
            <div className="d-flex justify-content-center flex-column text-big align-items-center mt-3">
                <img src={"./logo192.png"} alt="Jouzu logo" 
                className="mb-1"
                style={{
                    width: "5rem"
                }}/>
                上手絆
            </div>
            <div
                className="mb-5"
            >
                <Form.Control 
                    className="border border-secondary text-big py-2 px-3 border-4 fw-bold"
                    placeholder="Usuario"
                    onKeyDown={handleEnter}
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    autoFocus
                />
                <Form.Control
                    className="border border-secondary text-big py-2 px-3 border-4 fw-bold mt-4 mb-5"
                    placeholder="Contraseña"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    onKeyDown={handleEnter}
                />
                <span className="d-flex mb-5"/>
            </div>
            <Button
                className="mt-3 p-2 ps-5 text-big-2 rounded-pill mb-5 mt-5"
                variant="dark"
                onClick={handleAccept}
            >
                <strong>
                Ingresar
                <FontAwesomeIcon 
                    className="ms-4 me-3"
                    icon={faArrowRight} />
                </strong>
            </Button>  
                      
        </div>);
}

export default LoginUI;