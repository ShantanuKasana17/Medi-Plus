import React,{useState} from 'react';
import Footer from '../components/Footer/Footer';
import PageNavbar from '../components/Navbar/PageNavbar';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
const Plasmadonorcontact = () => {


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("")
    const [blood, setBlood] = useState("");
    const [pincode, setPincode] = useState("");
    const [dob, setDob] = useState("");
    const [alt, setAlt] = useState("");

    const handleSubmit = async (e) => {
      /*   e.preventDefault(); */

        const Data = {
            Name: name,
            Phone_no: phone,
            City: city,
            Address: address,
            DOB: dob,
            Pincode: pincode,
            Blood_group: blood,
            Alternate_phone: alt

        }
        try {
            const res = await axios.post("http://localhost:5000/api/plasma", Data)

            console.log(res.data)

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="plasmadonorcontact">
            <PageNavbar />
            <div className="container mt-5 p-4 shadow-lg">
                <form className="border border-primary border-4 rounded-3 p-4 mb-5" onSubmit={handleSubmit}>
                    <h1 className="display-6 fw-bold mark text-center mb-5">
                        Add Yourself as a COVID-19 Plasma Donor
                    </h1>

                    <div className="form mb-4">
                        <label for="floatingInput" className="p-1"><b>Name *</b></label>
                        <input type="text" className="form-control" id="floatingInput" placeholder="Your Name..." value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="form mb-4">
                        <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
                        <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="10 Digits only..." value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="form mb-4">
                        <label for="floatingInput" className="p-1"><b>Alternate Phone Number</b></label>
                        <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="Secondary Mobile No..." 
                        value={alt} onChange={(e) => setAlt(e.target.value)}
                        />
                    </div>

                    <div className="form mb-4">
                        <label for="inputState" className="form-label p-1"><b>Blood Group *</b></label>
                        <select id="inputState" className="form-select" value={blood} onChange={(e) => setBlood(e.target.value)}>
                            <option selected>Select your Blood Group</option>
                            <option>A +</option>
                            <option>A -</option>
                            <option>B +</option>
                            <option>B -</option>
                            <option>O +</option>
                            <option>O -</option>
                            <option>AB +</option>
                            <option>AB -</option>
                        </select>
                    </div>

                    <div className="list-group p-1">
                        When did you get cured of COVID-19 ?
                        <ul>
                            <li>
                                If you got cured more than 14 days ago, then people can contact you right now
                            </li>
                            <li>
                                If you got cured in under 14 days, then we will reach out to you as soon as 14 days pass
                            </li>
                        </ul>
                    </div>

                    <div className="form mb-4">
                        <label for="floatingInput" className="p-1"><b>In BOTH or ANY Cases, please provide the Date below *</b></label>
                        <input type="date" className="form-control" id="floatingInput" placeholder="Pick Date" value={dob} onChange={(e) => setDob(e.target.value)} />
                    </div>

                    <div className="form mb-4">
                        <label for="floatingInput" className="p-1"><b>Address (optional)</b></label>
                        <input type="text" className="form-control" id="floatingInput" placeholder="New Sangvi, Pune" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className="form mb-4">
                        <label for="inputState" className="form-label"><b>Choose your City *</b></label>
                        <select id="inputState" className="form-select p-2" value={city} onChange={(e) => setCity(e.target.value)}>
                            <option selected>Select City</option>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                            <option>Bangalore</option>
                            <option>Ahmedabad</option>
                            <option>Hyderabad</option>
                            <option>Chennai</option>
                            <option>Kolkata</option>
                            <option>Surat</option>
                            <option>Pune</option>
                            <option>Jaipur</option>
                            <option>Lucknow</option>
                            <option>Indore</option>
                            <option>Thane</option>
                            <option>Agra</option>
                            <option>Ghaziabad</option>
                        </select>
                    </div>

                    <div className="form mb-4">
                        <label for="floatingInput" className="p-1"><b>Pin Code</b></label>
                        <input type="text" maxlength="6" className="form-control" id="floatingInput" placeholder="6 Digits only..." value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    </div>

                    <div className="form-check mb-5">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" for="invalidCheck">
                            I hereby Agree to Terms and Conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>

                    <button className="d-grid gap-2 col-12 mx-auto w-80 btn btn-primary mb-3 border border-none" href="#" role="button" type="submit" style={{ "background-color": " #650013" }}>
                        Submit
                    </button>

                    <Link to="/plasma" className="d-grid gap-2 col-12 mx-auto w-80 btn btn-primary" role="button">
                        View All Plasma Donors
                    </Link>
                </form>

            </div>

            <Footer />
        </div>
    );
};

export default Plasmadonorcontact;
