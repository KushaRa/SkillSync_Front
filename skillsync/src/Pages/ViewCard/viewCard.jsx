import React from "react";
import "./viewCard.css";
import MainNav from "../../components/MainNav/MainNav";
import JobDetailsContainer from "../../components/JobDetailsContainer/JobDetailsContainer";
import JDetailsStd from "../../components/JobDetailsContainerSTD/jDetailsStd";


export const ViewCard = () =>   
 { 
  return (

    <div className="VCard">
      <MainNav/>
      <JobDetailsContainer />
      <JDetailsStd/>
    </div>
  );
};

export default ViewCard;
