import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Products</h2>
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
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}
