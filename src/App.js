import React from 'react';
import logo from './logo.svg';
import './App.css';
import CartList from './Components/CartList';
import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';
import Dropdown from './Components/Dropdown';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';



class App extends React.Component {
  constructor(props) {
    super();
    this.state ={
      
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Header />
        <div className="main-container">
          <div>
            <Navbar />
            <Dropdown />
            <ProductList />
          </div>
          <div className="cart-details">
            <CartList />
          </div>
        </div>
      </div>
    );

  }


}

export default App;
