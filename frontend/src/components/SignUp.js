import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





const SignUp = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Define handleGoogleSignIn function
  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      console.log('Google sign-in successful!');
      
      // Get user email from authentication result
      const user = result.user;
      const email = user.email;

      // Save user data to the database (Firestore example)
      const db = firebase.firestore();
      await db.collection('users').doc(user.uid).set({ email });

      // Redirect the user to the home page
      navigate('http://localhost:3000/'); // Replace '/home' with the path to your home page
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };



  async function submit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:8000/signup",{
            email,password
        })
        .then(res=>{
            if(res.data=="exist"){
                alert("User already exists")
            }
            else if(res.data=="notexist"){
                history("/home",{state:{id:email}})
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }

}
  return (
    <section className="background-radial-gradient overflow-hidden">
      <style>
        {`.background-radial-gradient {
          background-color: hsl(218, 41%, 15%);
          background-image: radial-gradient(650px circle at 0% 0%,
            hsl(218, 41%, 35%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%),
            radial-gradient(1250px circle at 100% 100%,
            hsl(218, 41%, 45%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%);
        }
        #radius-shape-1 {
          height: 220px;
          width: 220px;
          top: -60px;
          left: -130px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
        #radius-shape-2 {
          border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
          bottom: -60px;
          right: -110px;
          width: 300px;
          height: 300px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
        .bg-glass {
          background-color: hsla(0, 0%, 100%, 0.9) !important;
          backdrop-filter: saturate(200%) blur(25px);
        }`}
      </style>

      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
              The SignUp Page <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>Viren`s Blog</span>
            </h1>

          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form action='POST' >
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  {/* <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" />
                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                      </div>
                    </div>
                  </div> */}

                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>

                  {/* Checkbox */}
                  {/* <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label className="form-check-label" htmlFor="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div> */}

                  {/* Submit button */}
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4 " onClick={submit}>
                      Sign up
                    </button>
                  </div>


                  {/* Register buttons */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1" onClick={handleGoogleSignIn}>
                      <FontAwesomeIcon icon={faGoogle} />
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <FontAwesomeIcon icon={faTwitter} />
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <FontAwesomeIcon icon={faGithub} />
                    </button>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
