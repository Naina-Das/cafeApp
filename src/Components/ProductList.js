import React from 'react';
import '../CSS/product.css';
import { product } from './product';
import { useContext } from 'react';
import { BillContext } from './AppContext';



const ProductList = () => {
    let bill = useContext(BillContext);
     const filteredData= bill.selectedCategory.menus.filter(menu => menu.category === bill.selectedMenu);
    console.log("---------",bill);

    const addToCart = (type,data)=>{
        if(bill.cartData.category === bill.selectedCategory.menuType) {
            const getMenuIndex = bill.cartData.menus.findIndex(cartData => cartData.name === data.name);
            if(getMenuIndex === -1) {
               bill.cartData.menus.push({name: data.name, price: data.price, quantity: 1})
            } else {
               type=== 'add' ? bill.cartData.menus[getMenuIndex].quantity += 1 : bill.cartData.menus[getMenuIndex].quantity -= 1
             }
             bill.setCartdata(bill.cartData);
          } else {
              const details = {category: bill.selectedCategory.menuType, menus: []};
              details.menus.push({name: data.name, price: data.price, quantity:1})
              bill .setCartdata(datas=>({
                ...datas,
                ...details
             }))

            }
    }

    return (
        <div className="container">
            {filteredData.map((data, index) => {
                return (

                    <div className="product-list" key = {index + data.name}>
                        <div className="image-container">


                            <img src={data.imageUrl} className="img-size" />
                        </div>
                        <div className="cart-container">
                            <div className="title">{data.name}</div>
                            <div className="price">{data.currencySymbol} {data.price}</div>
                            <div className="input-group">
                                <input type="button" value="-" className="button-minus" data-field="quantity" onClick = {() => addToCart('plus', data)}/>
                                <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                                <input type="button" value="+" className="button-plus" data-field="quantity" onClick = {() => addToCart('minus', data)}/>

                            </div>
                        </div>
                    </div>
                );
            })}






        </div>
    );




}
export default ProductList;