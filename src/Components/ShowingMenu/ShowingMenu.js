import React, { useState, useEffect } from 'react';
import menu from '../../menu';
import Item from '../Item/Item';
import './ShowingMenu.css'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart,removeFromDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const ShowingMenu = () => {
    
    const[item, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const[menu, setMenu] = useState([]); 

    useEffect(()=>{
        fetch('http://localhost:3001/items')
        .then(res => res.json())
        .then(data=>{            
            setMenu(data);
        })
    },[])

    const menuShow=(option)=>{
        console.log(option);
        let menuList= menu.filter(items=>items.category===option);
        setItems(menuList);
    }
    

    useEffect (()=>{

        const savedCart = getDatabaseCart();
        const productIds = Object.keys(savedCart);
       if(menu.length){
        const previousCart = productIds.map(existingId=>{
            const product = menu.find(pd=> pd.id === existingId);
            product.quantity = savedCart[existingId];
            return product ; 
        })
        setCart(previousCart);
        let defaultMenu = menu.filter(items=>items.category==="breakfast");
        setItems(defaultMenu);
       }

    },[menu])


    const handleAddProduct = (item) => {
        const tobedAddedId = item.id;
        const sameItem = cart.find(pd=>pd.id===tobedAddedId);
        let count = 1;
        let newCart;
      
        if(sameItem){
            count  = sameItem.quantity +1 ;
            sameItem.quantity = count;
            const others = cart.filter(pd => pd.id !== tobedAddedId);
            newCart = [...others, sameItem];
        }
        else{
            item.quantity = 1;
            newCart = [...cart, item];
        }
        
        setCart(newCart);    
        addToDatabaseCart(item.id,count) ;
    }

    const handleMinusProduct = (item) =>{

        const tobeMinusId = item.id;
        const tobeMinusIdItem = cart.find(pd=>pd.id===tobeMinusId)
        let count ;
        let newCart;

        if(tobeMinusIdItem){
            if(tobeMinusIdItem.quantity===1)
            {
                tobeMinusIdItem.quantity=0;
                newCart = cart.filter(pd => pd.id !== tobeMinusId);    
                removeFromDatabaseCart(tobeMinusId);
                
            }
            
            else if(tobeMinusIdItem.quantity>0){
                count = tobeMinusIdItem.quantity-1;
                tobeMinusIdItem.quantity = count;
                const others = cart.filter(pd=>pd.id!==tobeMinusId)
                newCart = [...others,tobeMinusIdItem];                
                addToDatabaseCart(item.id,count);
            }
            setCart(newCart);
        }
      
        

    }
    
    
    return (
        <div className="breakfast">
            <div className="menu-section">
                <p onClick={()=>{menuShow("breakfast")}}>Breakfast</p>
                <p onClick={()=>{menuShow("lunch")}}>Lunch</p>
                <p onClick={()=>{menuShow("dinner")}}>Dinner</p>
            </div>

            <div className="row">
                    
                    {                       
                        item.map(items=><Item
                        key={items.id}
                        item={items}
                        handleAddItem={handleAddProduct}
                        handleMinusItem={handleMinusProduct}                        
                        >
                        </Item>)
                    }   
                            
            </div>
            
          
            
            <div className="wrap">
            
            {
                cart.length ?
                <Link to="/review">
                    <button className="reviewOrderBtn" >Review Order</button>  
                </Link>
                :
                <button className="reviewOrderBtnDisabled" >Review Order</button>            
            }   
        </div>
        
        </div>
        
    );
};

export default ShowingMenu;