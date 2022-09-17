import React from 'react'
export const Carousel = (props) => {
    return(
        <div id="carousel">
            <div className='container'>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">

  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>


  <div class="carousel-inner">
    <div class="item active">
      <img src="img/portfolio/01-small.jpg" alt="Los Angeles"/>
    </div>

    <div class="item">
      <img src="img/portfolio/02-small.jpg" alt="Chicago"/>
    </div>

    <div class="item">
      <img src="img/portfolio/01-small.jpg" alt="New York"/>
    </div>
  </div>


  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                

                {/* <div className='carousel-container'>
                    <div className='carousel-item'>
                        <h1>first</h1>
                    </div>
                    <div className='carousel-item'>
                        <h1>second</h1>
                    </div>
                    <div className='carousel-item'>
                        <h1>third</h1>
                    </div>
                </div> */}
                
                {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="..." alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide"></img>
                    </div>
                </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div> */}
            </div>
        </div>
)}
