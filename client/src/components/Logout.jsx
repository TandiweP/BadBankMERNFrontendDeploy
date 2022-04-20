import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout(props) {
    const navigate = useNavigate();
    localStorage.clear();
    props.handleLogout();

    useEffect(() => {
        navigate("/");
    })

    return (
        <h4>Logging out...</h4>
    );
}

