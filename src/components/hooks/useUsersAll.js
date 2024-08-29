
import React, { useEffect, useState } from 'react'

export const useUsersAll = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Obtengo los usuarios registrados desde la base de datos.
    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/users");
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                console.error("error")
            }
        }

        fetchUsers();

    }, [])

    return {
        users,
        isLoading
    }
}
