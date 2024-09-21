import React, { useState } from "react";
import "./Company.css";
import MainNav from "../../components/MainNav/MainNav";
import { Popular } from "../../components/Popular/popular";
import NewIntern from "../../components/NewJobAdd/newIntern";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { CategoryFlexContainer } from "../../components/Category/category";

export const Company = () => {
  const [profile, setProfile] = useState({
    companyName: "",
    address: "",
    telephone: "",
    email: "",
    establishedYear: "",
    profilePicture: null,
  });

  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormOpen(false);
    localStorage.setItem("companyProfile", JSON.stringify(profile));
    console.log("Profile updated:", profile);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <div className="Content">
      <MainNav />
      <div
        className="profile-box"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "80px",
          height: "200px",
          justifyContent: "flex-start",
          marginLeft: "70px",
        }}
      >
        <div
          className="profile-picture-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10px",
            marginLeft: "70px",
          }}
        >
          {profilePicturePreview ? (
            <img
              src={profilePicturePreview}
              alt="Profile"
              className="profile-picture"
              style={{
                border: "2px solid #ccc",
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                color: "transparent",
              }}
            />
          ) : (
            <div
              style={{
                border: "2px solid #ccc",
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f0f0f0",
              }}
            >
              {/* Optional: Placeholder content 
        <span><PhotoCamera style={{ fontSize: '32px' }} /></span>*/}
            </div>
          )}
          <label
            htmlFor="file-upload"
            className="custom-file-upload"
            style={{
              position: "absolute",
              bottom: "10px", // Adjust the position as needed
              right: "10px",
              cursor: "pointer",
              zIndex: "1",
              backgroundColor: "#009cb8",
              padding: "5px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhotoCamera style={{ fontSize: "20px" }} />
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="profileUpdate" style={{ flexDirection: "row" }}></div>
        <div style={{ color: "white" }}>
          <h3>Company Profile</h3>
          <p>
            <strong>Company Name:</strong> {profile.companyName}
            <span style={{ paddingLeft: "200px" }}></span>
            <strong>Address:</strong> {profile.address}
          </p>
          <p>
            <strong>Telephone:</strong> {profile.telephone}
            <span style={{ paddingLeft: "242px" }}></span>
            <strong>Email:</strong> {profile.email}
          </p>

          <button className="editC" onClick={handleEdit}>
            <EditIcon />
          </button>
        </div>
      </div>

      <Modal open={formOpen} onClose={handleFormClose}>
        <Box sx={{ ...modalStyle, width: 400 }}>
          <form className="company-info" onSubmit={handleSubmit}>
            <div classNasme="header">Update Company Profile</div>
            {[
              "companyName",
              "address",
              "telephone",
              "email",
              "establishedYear",
            ].map((field) => (
              <div className="form-group" key={field}>
                <label htmlFor={field}>
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={
                    field === "establishedYear"
                      ? "number"
                      : field === "email"
                      ? "email"
                      : "text"
                  }
                  id={field}
                  name={field}
                  value={profile[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field
                    .replace(/([A-Z])/g, " $1")
                    .toLowerCase()}`}
                />
              </div>
            ))}
            <button className="update-button" type="submit">
              Update Profile
            </button>
          </form>
        </Box>
      </Modal>

      <div className="container">
        <div className="cardNbutton">
          <div
            className="InternCards"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginLeft: "120px",
              marginTop: "175px",
            }}
          >
            <CategoryFlexContainer />
            <Popular />
          </div>
          <div className="NewIntern">
            <button
              className="NewAdd"
              onClick={handleOpen}
              style={{ marginLeft: "130px" }}
            >
              ADD NEW
            </button>
            <NewIntern open={open} handleClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal Box Style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
};
