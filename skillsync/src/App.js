import React from "react";
import { Home } from "./Pages/Home/Home";
import { Contact } from "./Pages/Contact/Contact";
import { Company } from "./Pages/CompanyDashboard/Company";
import  Login  from "./Pages/logIn/LogIn";
import SelectUser from "./Pages/selectUser/SelectUser";
import CreateAcc from "./Pages/CreateAcc/CreateAcc";
import { Card } from "./Pages/Card/Card";
import StudentProfile from "./Pages/studentProfile/StudentProfile";
import { Categories } from "./Pages/Categories/categories";
import { Route, Routes } from "react-router-dom";
import ViewCard from "./Pages/ViewCard/viewCard";
import StdViewCard from "./Pages/StdView/stdView";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Companyregistration from "./Pages/CreateAcc/Companyregistration";

function App() {
    return (
<div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/*<Route path="/internships" element={<Internships/>}></Route>
       */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>      
        <Route path="/internships" element={<Company />}></Route>
        <Route path="/selectuser" element={<SelectUser />}></Route>
        <Route path="/createacc" element={<CreateAcc />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/profile" element={<StudentProfile />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/view/:id" element={<ViewCard />}></Route>
        <Route path="/apply/:id" element={<StdViewCard />}></Route>
        <Route path="/companyregistration" element={<Companyregistration />}></Route>
        
      </Routes>
</div>
);
}

export default App;