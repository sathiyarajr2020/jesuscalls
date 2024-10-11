import logo from "../Assets/logo.png";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="logo" className="logo-image" />
          <p>
            Jesus Calls is a global ministry founded by Late Brother D.G.S. Dhinakaran and led by Dr. Paul Dhinakaran. Jesus Calls serves to bring comfort and healing to the broken-hearted without distinction through prayer offered all 24/7 throughout the year.
          </p>
        </div>
        <div className="footer-right">
          <h2>Want to know more?</h2>
          <p>24*7 Prayers</p>
          <p><strong>Phone:</strong> 8546999000</p>
          <p><strong>For Queries, Call:</strong> 0442345677</p>
        </div>
        <div className="footer-right">
          <h2>Contact Details</h2>
          <p><strong>Address:</strong> Jesus Calls, 16, Dr. D.G.S Dhinakaran Road, R.A.Puram, Chennai - 600 028.</p>
          <p><strong>Email:</strong> admin@jesuscalls.org</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
