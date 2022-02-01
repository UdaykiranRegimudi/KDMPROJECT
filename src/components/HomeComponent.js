import React from 'react';

function Home(props) {
    console.log("In Home function");
    return(
        <div>
         <img className="responsive" src="assets/images/home.jpg"
                                alt="KDM Lab pic" /> 
        </div>
    );
}

export default Home;