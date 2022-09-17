import { Link } from 'react-router-dom'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/home#page-top'>
            MTB
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              {/* <Link to="/home" element="#features">
                    <li>Features</li>
              </Link> */}
              <a href="/home#features" className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='/home#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='/home#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='/home#portfolio' className='page-scroll'>
                Products
              </a>
            </li>
            <li>
              <a href='/home#testimonials' className='page-scroll'>
                Our Clients
              </a>
            </li>
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href='/home#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}