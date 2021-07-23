import '../CSS/navbar.css'
import {useContext, useState} from 'react';
import { BillContext} from './AppContext';


function Navbar (){
    const bill = useContext(BillContext);

    const [selectedTab, setTab] = useState('Drinks')
    const handleTab = (activeTab) =>{
        
        setTab(activeTab);
        const selectedData = bill.data.filter((data)=> data.menuType == activeTab);
     const filteredData= bill.selectedCategory.menus.filter(menu => menu.category === bill.selectedMenu);
        console.log(" SelectedData",selectedData);
        bill.setCategory(selectedData[0]);
       bill.setMenu(selectedData[0].subMenus[0]);
    }
    const setActive = (activeTab)=>{
    if(selectedTab == activeTab){
        return "active";
    }
    return null;
    }
   
   
    return <div className = "navbar">
            <ul>
  <li><a className={setActive('Drinks')} onClick={() => handleTab('Drinks')}>Drinks</a></li>
  <li><a className={setActive('Food')} onClick={() => handleTab('Food')}>Food</a></li>
  <li><a className={setActive('Dessert')} onClick={() => handleTab('Dessert')}>Dessert</a></li>
  
</ul>    

    </div>
}
export default Navbar;

//render() {
//  return (
//     <AppContext.Consumer>
//       {context => (
//         <div className="haveMargin">
//           <label className="labels">
//             {context.state.localeObj.languageLabel}
//           </label>
//           <select
//             value={context.state.localeObj.locale}
//             onChange={context.updateLocale}
//            >
//               <option value="en-US">English</option>
//               <option value="fr-FR">French</option>
//               <option value="es-ES">Spanish</option>
//             </select>
//         </div>
//      )}
//      </AppContext.Consumer>
//   );
//  }