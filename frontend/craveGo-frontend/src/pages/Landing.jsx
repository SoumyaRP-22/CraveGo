import { useEffect, useState } from "react";
import "./Landing.css";

function Landing({ onExplore }) {
  const [hideIntro, setHideIntro] = useState(false);

  const enterCraveGo = () => {
    setHideIntro(true);

    // Open Welcome page after intro animation
    setTimeout(() => {
      onExplore();
    }, 800);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideIntro(true);

      // Automatically move to Welcome page
      setTimeout(() => {
        onExplore();
      }, 800);
    }, 6000);

    return () => clearTimeout(timer);
  }, [onExplore]);

  return (
    <section
      className={`intro ${hideIntro ? "hide" : ""}`}
      id="intro"
    >

      {/* Decorative Curves */}
      <div className="curve one"></div>
      <div className="curve two"></div>
      <div className="curve three"></div>

      {/* Logo */}
      <div className="logo">
        Crave<span>Go</span>
      </div>

      {/* Food Items */}

      <img
        className="food burger"
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=90"
        alt="Burger"
      />

      <img
        className="food pizza"
        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=90"
        alt="Pizza"
      />

      <img
        className="food bowl"
        src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=90"
        alt="Food bowl"
      />

      <img
        className="food fries"
        src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=90"
        alt="Fries"
      />

      {/* Floating Ingredients */}

      <div className="ingredient tomato">
        🍅
      </div>

      <div className="ingredient leaf">
        🌿
      </div>

      <div className="ingredient pepper">
        🌶️
      </div>

      {/* Center Content */}

      <div className="content">

        <div className="small-text">
          Welcome to CraveGo
        </div>

        <h1>
          Good food.
          <br />
          <span>Good mood.</span>
        </h1>

        <p>
  Discover delicious food, order your favourites
  and get your favourite meals delivered to your doorstep.
</p>

        <button
          className="enter-btn"
          onClick={enterCraveGo}
        >
          Explore CraveGo →
        </button>

      </div>

    </section>
  );
}

export default Landing;