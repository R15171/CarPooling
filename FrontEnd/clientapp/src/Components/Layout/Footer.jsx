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
                <h5>SURAT</h5>
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
                <p>then you are at Right Place</p>
                <p><Link to='/AddDriver' className="text-warning">Click here to Publish Ride →</Link></p>
              </div>
              <p style={{fontStyle:'italic'}}>
              "Publish a ride and connect with passengers for a seamless traveling experience!"
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

            <div className="col-md-4">
              <div>
                <h5>Find your perfect Ride here</h5>
                <p><a href="/findRide" className="text-warning">Click to Get a Ride →</a></p>
              </div>
              <div>
                <p style={{fontStyle:'italic'}}>"Just enter source and destination and we will find the best ride for you"</p>
              </div>
            </div>

            {/* Right Section */}
            

            <div className="col-md-4">
              <h4>SIDDHARTH PATIL</h4>
              <div className="mt-3">
                <h5>Dhule</h5>
                <p>Email: <a href="sidpatil851@gmail.com" className="text-white">sidpatil851@gmail.com</a></p>
                <p>Phone: +91 8830150091</p>
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