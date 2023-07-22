import React from "react";
import { useLocation } from "react-router-dom";

function Home(){

    const location=useLocation()

    return(
        <div className="homepage">

            <h1>
                Heloo {location.state.id} Welcome to Home
            </h1>
        </div>
    )
}

export default Home;