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
                        id={items.id}
                        name={items.name}
                        description={items.description}
                        price={items.price}
                        image={items.image}>
                        </Item>)
                    }   
                            
            </div>
        </div>
        
   
    );
};

export default Dinner;