import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout(props) {
    const navigate = useNavigate();
    localStorage.clear();
    props.handleLogout();

    useEffect(() => {
        navigate("/");
    })

    return (
        <h4>You are being logged out.</h4>
    );
}

export default Logout;
