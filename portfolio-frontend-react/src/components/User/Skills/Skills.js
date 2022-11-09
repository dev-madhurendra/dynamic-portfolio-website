import React, { useEffect, useState } from "react";
import SkillBar from "react-skillbars";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../../../actions/skillAction";
import isLogin from "../../../shared/authorization";


const Skills = ({ reff }) => {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };



  return (
    <div ref={reff} style={{ backgroundColor: "#fff" }} className={!isLogged ? "container1 pt-0 pb-5" :  "pt-0 pb-5"}>
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-4">
          Skills
        </h2>
        <SkillBar
          skills={skills}
          colors={colors}
          animationDuration={1000}
        ></SkillBar>
      </div>
    </div>
  );
};

export default Skills;