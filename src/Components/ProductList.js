import React from 'react';
import '../CSS/product.css';
import { product } from './product';
import { useContext } from 'react';
import { BillContext } from './AppContext';



const ProductList = () => {
    let bill = useContext(BillContext);
    const filteredData= bill.selectedCategory.menus.filter(menu => menu.category === bill.selectedMenu);
    const addToCart = (type,data,index)=>{
        const categoryIndex = bill.data.findIndex(b => b.menuType === bill.selectedCategory.menuType);
        if (categoryIndex >= 0) {
            bill.data[categoryIndex].menus[index].cartCount = type === 'plus' ? bill.data[categoryIndex].menus[index].cartCount += 1 : bill.data[categoryIndex].menus[index].cartCount -= 1;
            bill.setData(
                bill.data.map((x, index) => {
                    if (index !== categoryIndex) return x;
                    x.menus = x.menus.map((subItem, subIndex) => {
                        if (subIndex !== index) return subItem;
                        return {
                            ...subItem,
                            ...bill.data[categoryIndex].menus[index]
                        };
                    });
              
                    return x;
                }),
              );
        }
        const menuType = bill.selectedCategory.menuType;
        if(bill.cartData[menuType] && bill.cartData[menuType].category === bill.selectedCategory.menuType) {
            const getMenuIndex = bill.cartData[menuType].menus.findIndex(cartData => cartData.name === data.name);
            if(getMenuIndex === -1) {
                bill.cartData[menuType].price += data.price;
               bill.cartData[menuType].menus.push({name: data.name, price: data.price, quantity: 1})
            } else {
                let quantity = bill.cartData[menuType].menus[getMenuIndex]['quantity'];
                bill.cartData[menuType].price = type === 'plus' ? bill.cartData[menuType].price += data.price : bill.cartData[menuType].price -= data.price;
                bill.cartData[menuType].menus[getMenuIndex]['quantity'] = type === 'plus' ? quantity += 1 : quantity -= 1;
                if (!bill.cartData[menuType].menus[getMenuIndex]['quantity']) {
                    bill.cartData[menuType].menus.splice(getMenuIndex, 1);
                }
             }
             bill.setCartdata(data => ({
                ...data,
                ...bill.cartData
             }));
          } else {
              const details = {};
              details[menuType] = {category: bill.selectedCategory.menuType, price: data.price,  menus: []};
              details[menuType].menus.push({name: data.name, price: data.price, quantity:1})
              bill .setCartdata(datas=>({
                ...bill.cartData,
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
                                <input type="button" value="-" className="button-minus" data-field="quantity" onClick = {() => addToCart('minus', data,index)} disabled={!data.cartCount}/>
                                <input type="number" step="1" max="" value= {data.cartCount} name="quantity" className="quantity-field" />
                                <input type="button" value="+" className="button-plus" data-field="quantity" onClick = {() => addToCart('plus', data, index)}/>

                            </div>
                        </div>
                    </div>
                );
            })}






        </div>
    );




}
export default ProductList;