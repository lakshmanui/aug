import React from 'react';
import { useHistory } from 'react-router';
import  './Header.css'
function Header() {
  const history =useHistory();
  const handleClick=() =>{debugger;
    history.push("/dashboard");
  }
  return (
    <div className="header">
        <div  className="header-left" >
      <img src="/images/logo.svg" className="header-logo"/>
      </div>
      <div  className="header-right">
      <div className="header-item" >Product</div>
      <div className="header-item" >Token</div>
      <div className="goto-app" onClick={handleClick}>Go to App</div>
      
      </div>
    </div>
  );
}

export default Header;
