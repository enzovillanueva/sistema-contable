import React from 'react'
import { useUsersAll } from '../hooks/useUsersAll'
import Table from 'react-bootstrap/Table';
import "../styles/ArticleHomePage.css"

export const ArticleHomePage = () => {

    const { users, isLoading } = useUsersAll();

    return (

        <div className='table-users'>
            <h1>Usuarios registrados</h1>
            {isLoading ? <h2>Cargando..</h2>
            : <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre de usuario</th>
                        <th>Tipo de rol</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((element, index) => (
                        <tr key={index}>
                            <th>{element.id_usuario}</th>
                            <th>{element.username}</th>
                            <th>{element.roles}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>}
        </div>

    )
}
