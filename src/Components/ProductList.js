import React from 'react';
import '../CSS/product.css';
import { product } from './product';
import {useContext} from 'react';
import { BillProvider } from './AppContext';




const ProductList = () => {
    const bill = useContext(BillProvider);
    console.log(bill);
        return (
            <div className="container">
                <div className="product-list">
                    <div className="image-container">


                        <img src="https://images.unsplash.com/photo-1543363950-c78545037afc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="img-size" />
                    </div>
                    <div className="cart-container">
                        <div className="title">My Name Is Cold Drink</div>
                        <div className="price">$30.22</div>
                        <div className="input-group">
                            <input type="button" value="-" className="button-minus" data-field="quantity" />
                            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                            <input type="button" value="+" className="button-plus" data-field="quantity" />

                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1543363950-c78545037afc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="img-size" />
                    </div>
                    <div className="cart-container">
                        <div className="title">My Name Is Cold Drink</div>
                        <div className="price">$30.22</div>
                        <div className="input-group">
                            <input type="button" value="-" className="button-minus" data-field="quantity" />
                            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                            <input type="button" value="+" className="button-plus" data-field="quantity" />

                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1543363950-c78545037afc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="img-size" />
                    </div>
                    <div className="cart-container">
                        <div className="title">My Name Is Cold Drink</div>
                        <div className="price">$30.22</div>
                        <div className="input-group">
                            <input type="button" value="-" className="button-minus" data-field="quantity" />
                            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                            <input type="button" value="+" className="button-plus" data-field="quantity" />

                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1543363950-c78545037afc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="img-size" />
                    </div>
                    <div className="cart-container">
                        <div className="title">My Name Is Cold Drink</div>
                        <div className="price">$30.22</div>
                        <div className="input-group">
                            <input type="button" value="-" className="button-minus" data-field="quantity" />
                            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                            <input type="button" value="+" className="button-plus" data-field="quantity" />

                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1543363950-c78545037afc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="img-size" />
                    </div>
                    <div className="cart-container">
                        <div className="title">My Name Is Cold Drink</div>
                        <div className="price">$30.22</div>
                        <div className="input-group">
                            <input type="button" value="-" className="button-minus" data-field="quantity" />
                            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                            <input type="button" value="+" className="button-plus" data-field="quantity" />

                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1543363950-c78545037afc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="img-size" />
                    </div>
                    <div className="cart-container">
                        <div className="title">My Name Is Cold Drink</div>
                        <div className="price">$30.22</div>
                        <div className="input-group">
                            <input type="button" value="-" className="button-minus" data-field="quantity" />
                            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
                            <input type="button" value="+" className="button-plus" data-field="quantity" />

                        </div>
                    </div>
                </div>
            </div>
        );



    
}
export default ProductList;