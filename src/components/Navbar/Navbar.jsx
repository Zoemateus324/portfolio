import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Zoé Mateus</div>
            <span>Toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Experiência</li>
                    <li>Portfólio</li>
                    <li>Comentários</li>
                </ul>
            </div>
            <button className="button">
                Contato
            </button>
        </div>
        
    </div>
  )
}

export default Navbar