import { Link } from "react-router-dom";

const Footer=()=>{
    return(  <div>
            <footer style={{ backgroundColor: 'slateblue', color: "#fff", padding: "2rem", marginTop: '300px' }}>
        Admin Info
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-4">
              <h4>RUSHIKESH PATIL</h4>
              <div className="mt-3">
                <h5>PUNE</h5>
                <p>Email: <a href="rishispatil2002@gmail.com" className="text-white">rishispatil2002@gmail.com</a></p>
                <p>Phone: +91 9313350998</p>
              </div>
              <div className="social-links">
                  <a href="#" className="text-white me-3">LinkedIn</a>
                  <a href="#" className="text-white me-3">FaceBook</a>
                  <a href="#" className="text-white me-3">Instagram</a>
                </div>
            </div>

            {/* Middle Section */}

            <div className="col-md-4">
              <div>
                <h5>Wants to find travel buddy?</h5>
                <p><Link to='/AddDriver' className="text-warning">then you are Right Place</Link></p>
              </div>
              <p>
              "Share your trip details to publish a ride and connect with passengers for a seamless traveling experience!"
              </p>
              <div>
                
              </div>
            </div>

            {/* Right Section */}
            

            <div className="col-md-4">
              <h4>OMKAR PATIL</h4>
              <div className="mt-3">
                <h5>PUNE</h5>
                <p>Email: <a href="rishispatil2002@gmail.com" className="text-white">rishispatil2002@gmail.com</a></p>
                <p>Phone: +91 9313350998</p>
              </div>
              <div className="social-links">
                  <a href="#" className="text-white me-3">LinkedIn</a>
                  <a href="#" className="text-white me-3">FaceBook</a>
                  <a href="#" className="text-white me-3">Instagram</a>
                </div>
            </div>

          </div>
        </div>
<br/>


        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-4">
              <h4>RINKESH MAILAPUR</h4>
              <div className="mt-3">
                <h5>PUNE</h5>
                <p>Email: <a href="rishispatil2002@gmail.com" className="text-white">rishispatil2002@gmail.com</a></p>
                <p>Phone: +91 9313350998</p>
              </div>
              <div className="social-links">
                  <a href="#" className="text-white me-3">LinkedIn</a>
                  <a href="#" className="text-white me-3">FaceBook</a>
                  <a href="#" className="text-white me-3">Instagram</a>
                </div>
            </div>

            {/* Middle Section */}
{/* 
            <div className="col-md-4">
              <div>
                <h5>Want to be the smartest in your carpooling group?</h5>
                <p><a href="#" className="text-warning">Sign up for our newsletter →</a></p>
              </div>
              <div>
                <h5>Follow us</h5>
                <div className="social-links">
                  <a href="#" className="text-white me-3">LinkedIn</a>
                  <a href="#" className="text-white me-3">FaceBook</a>
                  <a href="#" className="text-white me-3">Instagram</a>
                </div>
              </div>
            </div>
 */}
            {/* Right Section */}
            

            <div className="col-md-4">
              <h4>SIDDHARTH PATIL</h4>
              <div className="mt-3">
                <h5>PUNE</h5>
                <p>Email: <a href="rishispatil2002@gmail.com" className="text-white">rishispatil2002@gmail.com</a></p>
                <p>Phone: +91 9313350998</p>
              </div>
              <div className="social-links">
                  <a href="#" className="text-white me-3">LinkedIn</a>
                  <a href="#" className="text-white me-3">FaceBook</a>
                  <a href="#" className="text-white me-3">Instagram</a>
                </div>
            </div>

          </div>
        </div>



      </footer>
    </div>


)
}

export default Footer;