// import React from 'react'

// const Home = ({data}) => {
//   let home='abc'
//   // a={
//   //   data:'hello'
//   // }

//   return (
//     <div>{data}</div>
//   )
// }

// export default Home

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Home = () => {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src=".\public\desktop-wallpaper-harry-potter-harry-potter-harry-potter-hogwarts-halloween.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src=".\public\fe5ff34a91a4fa9eaaf0212d4613a0ae.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src=".\public\Free-Online-Courses-with-Certificates.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  )
}
export default Home