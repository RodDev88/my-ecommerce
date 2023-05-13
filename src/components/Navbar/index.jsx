import React from 'react'
import CartWidget from '../CartWidget'

function Navbar() {
  return (
    <div className="container">

      <nav className='nav'>
        <div className='nav-brand'>
          <a className='nav-link' href=''>Mi marca</a>

        </div>
        <ul className='nav-list'>
          <li>
            <a className='nav-list' href="">Categoría 1</a>
          </li>
          <li>
            <a className='nav-list' href="">Categoría 2</a>
          </li>
          <li>
            <a className='nav-list' href="">
              <CartWidget/>
            </a>
          </li>
        </ul>
      </nav>
    
    </div>
  )
}

export default Navbar