import '../CSS/dropdown.css'
import {useContext, useState} from 'react';
import { BillContext} from './AppContext';


function Dropdown (){
 
  const bill = useContext(BillContext);
  console.log('dddddddd', bill);
  const handleChange = (category)=>{
   bill.setMenu(category);
  }
    return (<div class="select">
    <select id="standard-select" value = {bill.selectedMenu} onChange = {(e)=>handleChange(e.target.value)}>
     
      {bill.selectedCategory.subMenus.map((selectedCategory, index)=>{
        return(
          <option value = {selectedCategory}>
            {selectedCategory}
          </option>
        );
      })}
    </select>
    <span class="focus"></span>
  </div>);
    
}
export default Dropdown;    