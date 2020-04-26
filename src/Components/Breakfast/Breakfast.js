import React, { useState } from 'react';
import menu from '../../menu';

const Breakfast = () => {
    console.log("Menu",menu);
    const bf= menu.filter(items=>items.category==="breakfast");
    console.log(bf);
    const{items, setItems} = useState(0);
    return (
        <div>
            <h1>This is breakfast component</h1>
            <ul>
            {
               bf.map(items=><li>{items.name}</li>)

            }   
            </ul>         
        </div>
    );
};

export default Breakfast;