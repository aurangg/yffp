import React from 'react';
import './major.css';

class Navigation extends React.Component{
    
    render(){
        return(
            <div id="Nav" className="header-third navigations">
                <nav className="navigation">
                    <div className="navigation-item">
                        <div className="navigation-subtext">
                            Social Media
                        </div>
                    </div>
                    <div className="navigation-item" style={{marginBottom:'10px'}}>
                        <img src={`${process.env.PUBLIC_URL}/images/twitter.png`} alt="twitter" style={{width:'40px', height:'40px'}}></img>
                    </div>
                    <div className="navigation-item" style={{marginBottom:'10px'}}>
                        <img src={`${process.env.PUBLIC_URL}/images/telegram.png`} alt="telegram" style={{width:'40px', height:'40px'}}></img>
                    </div>
                    <div className="navigation-item" style={{marginBottom:'10px'}}>
                        <img src={`${process.env.PUBLIC_URL}/images/uniswap.png`} alt="uniswap" style={{width:'40px', height:'40px'}}></img>
                    </div>
                    <div className="navigation-item" style={{marginBottom:'10px'}}>
                        <img src={`${process.env.PUBLIC_URL}/images/contract.png`} alt="contract" style={{width:'40px', height:'40px'}}></img>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;
