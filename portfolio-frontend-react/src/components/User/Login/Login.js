import React, { useEffect, useState } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Particles } from '@blackbox-vision/react-particles';
import { loginUser } from "../../../actions/loginAction";
import isLogin from "../../../shared/authorization";


const Login = () => {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(loginUser(data));
  };
  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);
  return (
    <div>
            {
        !isLogged && <div className='homeCanvas'>
        <Particles
            params= {{
              particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 300,
                },
              },
              color: {
                value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0","#EF5B0C","#3330E4","#FF9F29","#570A57","#40DFEF","#E9D5DA","#A6D1E6","#BFFFF0"],
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#fff",
                },
                polygon: {
                  nb_sides: 10,
                },
                image: {
                  src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
                  width: 100,
                  height: 100,
                },
              },
          
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 100,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false,
                  speed: 15,
                  size_min: 2,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 80,
                color: "#808080",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 10,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: -1000,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 70,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
              },
            },
            retina_detect:true,
          }}
            />
      </div>
      }
      <div className="container">
      <div className="row align-items-center vh-100">
        <div className=" col-12 col-sm-10 col-md-7 col-lg-6 mx-auto ">
          <div className="login d-flex align-items-center pb-5 pt-5">
            <div className="container container1">
              <div className="row ">
                <div className="col-md-12 col-lg-12 mt-4">
                  <h2 className="admin_panel login-heading mb-4 text-center text-danger mb-5">
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p>N</p>
                    <br/>
                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-label-group mb-4">
                      <input
                        type="text"
                        id="inputEmail"
                        className="form-control shadow-none"
                        placeholder="Email address"
                        {...register("email", {
                          required: "Email Required",
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <div className="text-danger ms-4">
                          You must enter your email
                        </div>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <div className="text-danger ms-4">
                          You must enter a valid email
                        </div>
                      )}
                    </div>

                    <div className="form-label-group mb-5">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control shadow-none"
                        placeholder="Password"
                        {...register("password", {
                          required: "Password Required",
                        })}
                      />

                      {errors.password &&
                        errors.password.type === "required" && (
                          <div className="text-danger ms-4 fs-6">
                            You must enter your password
                          </div>
                        )}
                    </div>

                    <input
                      className="btn btn-lg btn-primary btn-block shadow-none btn-login form-control text-uppercase font-weight-bold mb-2"
                      type="submit"
                      value=" Sign in"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Login;