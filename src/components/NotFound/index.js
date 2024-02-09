import './index.css'

const NotFound = () => (
  <div className="not_found_bg">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="not_found_img"
    />
    <h1 className="not_h1">Page Not Found </h1>
    <p className="not_par">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
