import { Image } from "./image";
import React from 'react';
export const ListProduct = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>DRY</h2>
          <p>
            List of Products
          </p>
        </div>
        <div class="row">
          <div className="card-deck">
            <div class="row">
              <div class="col-sm-4">
                <div className="card" style={{width:"100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">20GP</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card" style={{width:"100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>          
              <div class="col-sm-4">
                <div class="card" style={{width: "100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-2"></div>
            <div class="col-sm-4">
                <div class="card" style={{width: "100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card" style={{width: "100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>
      <div className='container'>
        <div className='section-title'>
          <h2>REEF</h2>
          <p>
            List of Products
          </p>
        </div>
        <div class="row">
          <div className="card-deck">
            <div class="row">
              <div class="col-sm-4">
                <div className="card" style={{width:"100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card" style={{width:"100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>          
              <div class="col-sm-4">
                <div class="card" style={{width: "100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-2"></div>
            <div class="col-sm-4">
                <div class="card" style={{width: "100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card" style={{width: "100%"}}>
                  <img class="card-img-top" src="img/20ftctr2.png" alt="Card image cap" width={"100%"} />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>




{/*       
      <div className='container'>
        <div className='section-title'>
          <h2>REEF</h2>
          <p>
            List of Products
          </p>
        </div>
        
        <div className='row'>
          <div className="col-xs-12 col-md-6">
              <div className='portfolio-item'>
              {props.data
                ? props.data.Img1.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-sm-6 col-md-6 col-lg-10 col-xs-12'>
                    <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                  </div>
                ))
                : 'Loading...'}
            </div>
          </div>
          <div className="col">
            <div className="about-text2">
              <h3>General Purpose Shipping Container</h3>
              {" "}
              <p>{props.data ? props.data.txt2 : "loading..."}</p>
              {" "}
              <a
                  href='/products'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
              </a>{' '}
            </div>
          </div>
        </div>

        <div className='row'>
          <div className="col-xs-12 col-md-6">
              <div className='portfolio-item'>
              {props.data
                ? props.data.Img2.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-sm-6 col-md-6 col-lg-10 col-xs-12'>
                    <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                  </div>
                ))
                : 'Loading...'}
            </div>
          </div>
          <div className="col">
            <div className="about-text2">
              <h3>High Cube Shipping Container</h3>
              {" "}
              <p>{props.data ? props.data.txt2 : "loading..."}</p>
              {" "}
              <a
                  href='/products'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
              </a>{' '}
              
            </div>
          </div>
        </div>

        
      </div> */}
    </div>
  )
}