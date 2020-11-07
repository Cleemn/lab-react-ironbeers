import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return(
    <div>
      <Link to="/beers">
        <div className="card mb-4">
          <img src="./images/beer1.jpg" alt="" className="card-img-top"/>
          <div className="card-body"></div>
          <h5 className="card-title">All Beers</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor tempora temporibus dignissimos dolores quos minima. Officia sit perspiciatis cupiditate molestias nihil, debitis, pariatur, ad voluptate iste enim magnam ducimus?Illo in cum saepe aliquam temporibus. Molestias quas, harum facere odio aut atque fuga quibusdam officiis. Laborum iste doloribus illum aperiam tempora nulla vero illo eveniet fugit? Dolore, ad illo?</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="card mb-4">
          <img src="./images/beer2.jpg" alt="" className="card-img-top"/>
          <div className="card-body"></div>
          <h5 className="card-title">Random Beer</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor tempora temporibus dignissimos dolores quos minima. Officia sit perspiciatis cupiditate molestias nihil, debitis, pariatur, ad voluptate iste enim magnam ducimus?Illo in cum saepe aliquam temporibus. Molestias quas, harum facere odio aut atque fuga quibusdam officiis. Laborum iste doloribus illum aperiam tempora nulla vero illo eveniet fugit? Dolore, ad illo?</p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="card mb-4">
          <img src="./images/beer3.jpg" alt="" className="card-img-top"/>
          <div className="card-body"></div>
          <h5 className="card-title">New Beer</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor tempora temporibus dignissimos dolores quos minima. Officia sit perspiciatis cupiditate molestias nihil, debitis, pariatur, ad voluptate iste enim magnam ducimus?Illo in cum saepe aliquam temporibus. Molestias quas, harum facere odio aut atque fuga quibusdam officiis. Laborum iste doloribus illum aperiam tempora nulla vero illo eveniet fugit? Dolore, ad illo?</p>
        </div>
      </Link>
    </div>
  )
}

export default Home;

