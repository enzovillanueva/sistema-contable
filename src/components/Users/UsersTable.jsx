import { CustomTable } from '../CustomTable';

export const UsersTable = () => {
    const columnNames = [
        {field: 'id', header: 'ID'},
        {field: 'name', header: 'Nombre'},
        {field: 'age', header: 'Edad'},
        {field: 'username', header: 'Username'}
    ];

    const data = [
        { id: 1, name: "Juan", age: 25, username: 'prueba' },
        { id: 2, name: "Ana", age: 30, username: 'prueba' },
        { id: 3, name: "Carlos", age: 28, username: 'prueba' },
        { id: 4, name: "Lucía", age: 22, username: 'prueba' },
        { id: 5, name: "Pedro", age: 35, username: 'prueba' },
        { id: 6, name: "María", age: 27, username: 'prueba' },
        { id: 7, name: "Jorge", age: 40, username: 'prueba' },
        { id: 8, name: "Clara", age: 31, username: 'prueba' },
        { id: 9, name: "Sofía", age: 29, username: 'prueba' },
        { id: 10, name: "Diego", age: 33, username: 'prueba' },
    ];

    const handleEdit = (row) => {
        console.log('Editando:', row); // Aquí se imprime la fila en la consola
        // Lógica para editar el registro
    };

    const handleDelete = (row) => {
        console.log('Eliminando:', row);
        // Lógica para eliminar el registro
    };

    return (
        <CustomTable
        columns={columnNames}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        />
    );
};
