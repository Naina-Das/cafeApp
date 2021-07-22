import '../CSS/navbar.css'
function Navbar (){
    return <div className = "navbar">
            <ul>
  <li><a class="active" href="#home">Drinks</a></li>
  <li><a href="#news">Food</a></li>
  <li><a href="#contact">Dessert</a></li>
  
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