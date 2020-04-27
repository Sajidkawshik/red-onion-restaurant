import React, { useState } from 'react';
import menu from '../../../menu';
import Item from '../Item';
import './Lunch.css';


const Lunch = () => {
    
    const ln= menu.filter(items=>items.category==="lunch");
    const{items, setItems} = useState(0);
    return (
        <div className="lunch">
            <div className="row">
                                
                    {
                        ln.map(items=><Item
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

export default Lunch;