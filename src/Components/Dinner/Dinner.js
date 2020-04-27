import React, { useState } from 'react';
import Item from './../Item/Item';
import menu from '../../menu';
const Dinner = () => {
    
        const dn= menu.filter(items=>items.category==="dinner");
        const{items, setItems} = useState(0)
    return (
        <div className="breakfast">
            <div className="row">
                                
                    {
                        dn.map(items=><Item
                        key={items.key}
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

export default Dinner;