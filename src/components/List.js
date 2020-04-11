import React from 'react';
import Item from './Item';

const List = ({tareas}) => {

    

    return (
        <div>
            {tareas.map((tarea) => <Item tarea = {tarea} /> )}
          
        </div>
    );
};

export default List;