// import React from 'react';
// import './App.css';

// import Login from './components/account/Login';
// import Registration from './components/account/Registration';

// function App() {
//   return (
//     <div>
//       <Login />
//       <Registration />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';

import Login from './components/account/Login';
import Registration from './components/account/Registration';
import {CategoriesPage} from "./components/categoriesPage";

const Header = () => {

    return (
        <header>
            <div> menu </div>
            <div>
                <button>log in</button>
                <span>cart:0</span>
            </div>
        </header>
    )
}


const Footer = () => {

    return (
        <footer>
            <div>
                <span>Контакти</span>
                <span>Правила користування</span>
            </div>

            <div>
                <span>Доставка</span>
                <span>Оплата</span>
            </div>
        </footer>
    )
}

function App() {
  return (
    <div>
        <Header/>
        {/* <Login/>
        <Registration/> */}
        <CategoriesPage/>
        <Footer/>
    </div>
  );
}

export default App;
