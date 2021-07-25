import '../CSS/cartlist.css'
import { useContext, useState } from 'react';
import { BillContext } from './AppContext';

function CartList() {
    const bill = useContext(BillContext);
    const totalPrice = Object.keys(bill.cartData).reduce((acc,key) => acc + bill.cartData[key].price, 0);
    const discountedPrice = totalPrice - ((10 * totalPrice)/100);

    return (
        <div className="cart-container">
            <div className="split-checkbox">

            </div>
            <div className="title">
                Check
            </div>
            {Object.keys(bill.cartData).map((d, index) => {
                return (
                    <div className="item" key={d + index}>
                        <div className="menu">
                            <div>
                                {bill.cartData[d].category}
                            </div>
                            <div>
                                $ {bill.cartData[d].price || 0}
                            </div>
                        </div>
                        
                        {bill.cartData[d].menus.length && bill.cartData[d].menus.map((menu, index) => {
                            return (
                                <div className="sub-menu" key={menu.name + index}>
                                    <div>
                                        {menu.name}
                                    </div>
                                    <div>
                                        $ {menu.price} x {menu.quantity}
                                    </div>
                                    <div>
                                        $ {menu.price * menu.quantity}
                                    </div>
                                </div>
                            )
                        })}
                        <div>
                            <hr></hr>
                        </div>
                    </div>

                );
            })}
            

            <div className="item summary">
                <div className="menu">
                    <div>
                       Total Price
                    </div>
                    <div>
                        $ { totalPrice }
                    </div>

                </div>
                <div className="sub-menu">
                    <div>
                        Discount
                    </div>
                    <div>
                        $10%
                    </div>
                </div>
                <div className="sub-menu">
                    <div>
                        Discounted Price
                    </div>
                    <div>
                        $ {discountedPrice}
                    </div>
                </div>
                

            </div>
            <button class="pay-button">Pay Bill</button>



        </div>
    );
}
export default CartList;