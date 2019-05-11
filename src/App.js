import React from 'react';
import css from './App.module.scss';
import logo from './talixo_logo.png';

function App() {
   return (
      <div className={css.app}>
         <header className={css.header}>
            <img src={logo} alt="Talixo logo" className={css['talixo-logo']} />
         </header>
         <div className={css['content-container']}>content</div>
      </div>
   );
}

export default App;
