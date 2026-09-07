import { useEffect, useState } from "react";
import "./Landing.css";

function Landing() {
    const [hideIntro, setHideIntro] = useState(false);

    
    const enterCraveGo = () => {
        setHideIntro(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setHideIntro(true);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);
                                                                                                                                                
    const goToLogin = () => {
        window.location.href = "/login";
    };

    // Register button
    const goToRegister = () => {
        window.location.href = "/register";
    };

    return (
        <>
            {/* =========================
                INTRO SCREEN
            ========================= */}

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
                        and find the best places to dine out — all in one place.
                    </p>

                    <button
                        className="enter-btn"
                        onClick={enterCraveGo}
                    >
                        Explore CraveGo →
                    </button>

                </div>

            </section>


            {/* =========================
                PUBLIC HOME PAGE
            ========================= */}

            <main className="main">

                <div className="main-content">

                    <h2>
                        Welcome to <span>CraveGo</span>
                    </h2>

                    <p>
                        Food Delivery • Dine Out • Great Experiences
                    </p>

                    {/* Authentication Options */}

                    <div className="auth-buttons">

                        <button
                            className="login-btn"
                            onClick={goToLogin}
                        >
                            Login
                        </button>

                        <button
                            className="register-btn"
                            onClick={goToRegister}
                        >
                            Register
                        </button>

                    </div>

                </div>

            </main>
        </>
    );
}

export default Landing;