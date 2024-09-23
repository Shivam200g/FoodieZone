
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import pizzu from './pizzu.jpeg'

export default function Home() {
  return (
    <div>
      <div className='main_box'>
        <div className='box1'>
               <p id='abc'>Dive into a world of flavors with our innovative dishes made from fresh, <br/>local ingredients. Join us for an unforgettable <br/>culinary adventure that celebrates taste and creativity!
            </p>

            <Link to="/login">
            <button type="button" className="btn btn-primary" id='but'>Login</button>
          </Link>

        </div>
        <div className='box2'>
            <img src={pizzu} alt='..'>
            </img>
        </div>
      </div>
    </div>
  )
}