import React from 'react';
import { UsersTable } from '../components/Users/UsersTable';
import "../styles/Users.css"
import { useUser } from '../context/UserProvider';

export const Users = () => {
    // const { user } = useUser()
    return (
        <div className='users-container'>
            <h2>Tabla de usuarios</h2>
            <UsersTable />
        </div>
    );
};
