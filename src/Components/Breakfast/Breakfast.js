import React, { useState } from 'react';
import menu from '../../menu';
import Item from '../Item/Item';
import './Breakfast.css'

const Breakfast = () => {
    
    const bf= menu.filter(items=>items.category==="breakfast");
    const{items, setItems} = useState(0);
    return (
        <div className="breakfast">
            <div className="row">
                                
                    {
                        bf.map(items=><Item
                        id={items.id}
                        name={items.name}
                        description={items.description}
                        price={items.price}
                        image={items.image}
                        item={items}>
                        </Item>)
                    }   
                            
            </div>
        </div>
        
    );
};

export default Breakfast;