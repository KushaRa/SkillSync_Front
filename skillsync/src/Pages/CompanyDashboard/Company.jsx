import React, { useState } from "react";
import "./Company.css";
import NavBar from "../../components/NavBar/Lognavbar";
import { Popular } from "../../components/Popular/popular";

export const Company = () => {
  const [profile, setProfile] = useState({
    name: "",
    companyInformation: "",
    profilePicture: null,
  });

  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfile({ ...profile, profilePicture: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicturePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="Content">
      <NavBar />
      <div className="container">
        <div className="profile-box box">
          <div className="profile-picture-container">
            {profilePicturePreview && (
              <img src={profilePicturePreview} alt="Profile" className="profile-picture" />
            )}
            <label htmlFor="file-upload" className="custom-file-upload">
              Choose File
            </label>
            <input id="file-upload" type="file" onChange={handleFileChange} />
          </div>
          <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
        </div>
        <div className="company-info box">
          <div className="header">Company Information</div>
          <input
            type="text"
            name="companyInformation"
            value={profile.companyInformation}
            onChange={handleChange}
            placeholder="Add your company information here"
          />
        </div>
        <div className="InternCards">
          <Popular />
        </div>
        <div className="NewIntern">
          <button className="NewAdd">ADD NEW</button>
        </div>
      </div>
    </div>
  );
};
