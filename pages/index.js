import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="display">
        <div className="sidebar">
          <div></div>
          <img src="logo.png" width="auto" height="24px" />
          <div>
            <Link href="">
              <button className="btn-signin">Sign In</button>
            </Link>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
        <div className="title">
          <h1>Restaurants and more, delivered to your door</h1>
        </div>
        <div className="input-header">
          <img src="pin.png" width="auto" height="20px" />
          <input type="text" placeholder="Enter your delivery address" />
          <button className="button-next">
            <img src="next.png" width="auto" height="20px" />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="container-box">
          <img src="scoot.svg" width="auto" height="auto" />
          <h1>Become a Dasher</h1>
          <p>
            As a delivery driver, youll make reliable money-working
            anytime,anywhere.
          </p>
          <button className="button-container-box">
            Start earning
            <img src="next1.jpeg" width="" height="14px" />
          </button>
        </div>
        <div className="container-box">
          <img src="house.svg" width="auto" height="auto" />
          <h1>Become a Partner</h1>
          <p>
            Grow your business and reach new costumers by partnering with us.
          </p>
          <button className="button-container-box">
            Sign up your store
            <img src="next1.jpeg" width="16px" height="20px" />
          </button>
        </div>
        <div className="container-box">
          <img src="mobile.svg" width="154" height="154" />
          <h1>Try the App</h1>
          <p>
            Experience the best your neighborhood has to offer, all in one app.
          </p>
          <button className="button-container-box">
            Get the app
            <img src="next1.jpeg" width="16px" height="20px" />
          </button>
        </div>
      </div>
      <div className="container-box-app">
        <div className="container-box-app-title">
          <h1>Its all here. All in one app.</h1>
          <p>
            Discover local, on-demand delivery or Pickup from restaurants,
            nearby grocery and convenience stotes, and more.
          </p>
          <button className="button-container-box-applace">Get the app</button>
        </div>
        <img src="food.jpg" width="720" height="auto" />
      </div>
      <div className="container-box-place">
        <img src="food-vegetable.jpg" width="720" height="auto" />
        <div className="container-box-place-title">
          <h1>Every Flavor Welcome</h1>
          <p>
            From you neighborhood sushi spot to the burger and fries you crave,
            sschoose from over 300,000 local and national favorites across the
            U.S., Canada and Australia.
          </p>
          <button className="button-container-box-applace">
            Find Restaurant
          </button>
        </div>
      </div>
      <div className="bg-list">
        <div className="list-city">
          <ul>
            <h4>Top Cities</h4>
            <li>
              <a href="">New York City</a>
            </li>
            <li>
              <a href="">Los Angeles</a>
            </li>
            <li>
              <a href="">Toronto</a>
            </li>
            <li>
              <a href="">Chicago</a>
            </li>
            <li>
              <a href="">Houston</a>
            </li>
            <li>
              <a href="">Brooklyn</a>
            </li>
            <li>
              <a href="">San Diego</a>
            </li>
            <li>
              <a href="">Las Vegas</a>
            </li>
          </ul>
          <ul style={{ marginBottom: -46 }}>
            <li>
              <a href="">San Francisco</a>
            </li>
            <li>
              <a href="">Seattle</a>
            </li>
            <li>
              <a href="">Atlanta</a>
            </li>
            <li>
              <a href="">Queens</a>
            </li>
            <li>
              <a href="">Vancouver, BC</a>
            </li>
            <li>
              <a href="">Miami</a>
            </li>
            <li>
              <a href="">San Antonio</a>
            </li>
            <li>
              <a href="">Phoenix</a>
            </li>
          </ul>
          <ul style={{ marginBottom: -46 }}>
            <li>
              <a href="">Denver</a>
            </li>
            <li>
              <a href="">Austin</a>
            </li>
            <li>
              <a href="">Washingthon, DC</a>
            </li>
            <li>
              <a href="">Dallas</a>
            </li>
            <li>
              <a href="">Melbourne</a>
            </li>
            <li>
              <a href="">Sydney</a>
            </li>
            <li>
              <a href="">Montreal</a>
            </li>
            <li>
              <a href="">All Cities</a>
            </li>
          </ul>
          <ul>
            <h4>Top Cuisines Near You</h4>
            <li>
              <a href="">Pizza Near Me</a>
            </li>
            <li>
              <a href="">Chinese Food Near Me</a>
            </li>
            <li>
              <a href="">Sushi Near Me</a>
            </li>
            <li>
              <a href="">Cafe Near Me</a>
            </li>
            <li>
              <a href="">Mexican Food Near Me</a>
            </li>
            <li>
              <a href="">Thai Food Near Me</a>
            </li>
            <li>
              <a href="">Lunch Food Near Me</a>
            </li>
            <li>
              <a href="">Seafood Near Me</a>
            </li>
          </ul>
          <ul style={{ marginBottom: -46 }}>
            <li>
              <a href="">Indian Food Near Me</a>
            </li>
            <li>
              <a href="">Dessert Near Me</a>
            </li>
            <li>
              <a href="">Burgers Near Me</a>
            </li>
            <li>
              <a href="">Asian Food Near Me</a>
            </li>
            <li>
              <a href="">Italian Food Near Me</a>
            </li>
            <li>
              <a href="">Vegan Food Near Me</a>
            </li>
            <li>
              <a href="">Sandwiches Near Me</a>
            </li>
            <li>
              <a href="">Restaurants Near Me</a>
            </li>
          </ul>
        </div>
        <div className="list-toknow">
          <ul>
            <h4>Get To Know Us</h4>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Investors</a>
            </li>
            <li>
              <a href="">Company Blog</a>
            </li>
            <li>
              <a href="">Engineering Blog</a>
            </li>
            <li>
              <a href="">Merchant Blog</a>
            </li>
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="">Dasher Central</a>
            </li>
            <li>
              <a href="">DoorDash Stories</a>
            </li>
            <li>
              <a href="">Linkedln</a>
            </li>
            <li>
              <a href="">Glassdoor</a>
            </li>
            <li>
              <a href="">Accessbility</a>
            </li>
          </ul>
          <ul style={{ marginLeft: 100 }}>
            <h4>Let Us Help You</h4>
            <li>
              <a href="">Account Details</a>
            </li>
            <li>
              <a href="">Order History</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
          <ul style={{ marginLeft: 100 }}>
            <h4>Doing Business</h4>
            <li>
              <a href="">Become a Dashboard</a>
            </li>
            <li>
              <a href="">Be a Partner Restaurant</a>
            </li>
            <li>
              <a href="">Get Dasher for Deliveries</a>
            </li>
            <li>
              <a href="">Get DoorDash for Work</a>
            </li>
          </ul>
          <div className="iklan">
            <div className="ios">
              <img src="phone.png" alt="background" />
              <div>
                <p>Available on the</p>
                <h4>App Store</h4>
              </div>
            </div>
            <div className="andro">
              <img src="google-play.png" alt="background" />
              <div>
                <h4>ANDROID APP STORE</h4>
                <p>Google Play</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="desc-footer">
            <img src="logoD.png" width="auto" height="20px" />
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Notice At Collection</p>
            <p>Delivery Locations</p>
            <p> © 2021 DoorDash</p>
          </div>
          <div className="img-footer">
            <a href="">
              <img src="facebook .png" width="auto" height="20px" />
            </a>
            <a href="">
              <img src="twitter.png" width="auto" height="20px" />
            </a>
            <a href="">
              <img src="instagram.png" width="auto" height="20px" />
            </a>
          </div>
        </div>
      </div>
      <div className="endfooter">bk bl</div>
    </div>
  );
}
