import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Typed from 'typed.js';
import { Particles } from '@blackbox-vision/react-particles';
import isLogin from "../../../shared/authorization";
import homeImage from "../../../assets/images/dev.png";
import { useSelector } from "react-redux";

const PageIntro = ({ reff }) => {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);
  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current , {
      strings:["A Web Developer" , "A Programmer","An Engineer"],
      startDelay:300,
      typeSpeed:150,
      backSpeed:100,
      backDelay:100,
      loop:true
    })
  
    return () => {
      typed.destroy();
    }
  }, [])

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  
  return (
    <section ref={reff} className="page_intro">
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
      <div className={!isLogged ? "container1 container" : "container"}>
        <div className="row">
          <div id="intro-section" className="col">
            <div className=" d-flex justify-content-center align-items-center header">
              <div className="container px-md-3 px-sm-0">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <p
                      className="display-3 fw-bold   pt-md-5 pt-5"
                    >
                      <span className="hello">Hello <span className="hello_emoji"> ✋ </span></span>
                      <br/>
                      <span className="name">Madhurendra Nath Tiwari</span>
                      <br/>
                      <span className="typed" ref={el}></span>
                    </p>
                    <hr className=" my-5 text-light" />
                    <div className="newbtn">
                      <button className="btn1" type="button">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                          Download CV
                        </a>
                        </button>
                      <button className="btn1" type="button">
                        <a href="https://www.google.com">
                          Hire Me
                        </a>
                      </button>
                      {/* <hr className=" my-5 text-light" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col d-none d-lg-inline">
            <div className=" d-flex justify-content-center align-items-center header">
              <div className="container px-md-3 px-sm-0">
                <div className="row">
                  <div className="col-md-12 mb-4 mt-3 ms-5 text-center dev-img">
                    <img
                      className="img-fluid mt-3 ms-5 "
                      src={homeImage}
                      alt="home"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;