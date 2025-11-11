import "../css/footer.css";
import ps5Icon from "../assets/ps5icon.png";
import xboxIcon from "../assets/xboxicon.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="wishlist-text-wrapper">
        <p>Wishlist Now</p>
      </div>
      <div className="footer-button-wrapper">
        <button>
          <a
            href="https://www.playstation.com/pl-pl/games/grand-theft-auto-vi/"
            target="_blank"
          >
            <img src={ps5Icon} alt="PS5 Logo" />
          </a>
        </button>
        <button>
          <a
            href="https://www.xbox.com/en-US/games/store/grand-theft-auto-vi/9nl3wwnzlzzn"
            target="_blank"
          >
            <img src={xboxIcon} alt="Xbox Logo" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Footer;
