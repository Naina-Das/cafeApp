import '../CSS/cartlist.css'
import { useContext, useState } from 'react';
import { BillContext } from './AppContext';

function CartList() {
    const bill = useContext(BillContext);
    console.log("cartlist", bill);



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
                                {bill.cartData[d]}
                            </div>
                            <div>
                                $ {bill.cartData[d].quantity}
                            </div>
                        </div>
                        
                        {bill.cartData[d].length && bill.cartData[d].map((menu, index) => {
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
                        <hr>
                        </hr>
                    </div>

                );
            })}
            

            <div className="item summary">
                <div className="menu">
                    <div>
                        Food
                    </div>
                    <div>
                        $25.50
                    </div>

                </div>
                <div className="sub-menu">
                    <div>
                        Domain Serene
                    </div>
                    <div>
                        $6.00 x 2
                    </div>
                    <div>
                        $12.00
                    </div>

                </div>
                

            </div>
            <button class="pay-button">Pay Bill</button>



        </div>
    );
}
export default CartList;