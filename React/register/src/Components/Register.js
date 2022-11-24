import { useState } from "react";
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Successfully.css";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Register = () => {
  const [contact, setContact] = useState({
    Firstname: "",
    Middlename: "",
    Lastname: "",
    gender: "",
    email: "",
    number: "",
    dob: "",
    Qualification: "",
    address: "",
    address1: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    course: "",
    Text1: "",
  });

  const userCollectionRef = collection(db, "Contacts");

  const handlechange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setContact((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const navigate = useNavigate();

  const createContext = (event) => {
    event.preventDefault();
    console.log("hi");
    addDoc(userCollectionRef, {
      Firstname: contact.Firstname,
      Middlename: contact.Middlename,
      Lastname: contact.Lastname,
      Gender: contact.gender,
      Email_Id: contact.email,
      PhoneNumber: contact.number,
      Date_of_Birth: contact.dob,
      Qualification: contact.Qualification,
      Address_Line_1: contact.address,
      Address_Line_2: contact.address1,
      City: contact.city,
      state: contact.state,
      zipcode: contact.zipcode,
      country: contact.country,
      course: contact.course,
      Additional_Comments: contact.Text1,
    });
    setModel(!modal);

    emailjs
      .sendForm("service_2vcgsha", "template_1n9dt2o", event.target,'9vS3E5QosyytvyO3a')
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const [modal, setModel] = useState(false);

  const toggleModal = () => {
    setModel(!modal);
    window.location.reload(false);
    //navigate("/register");
    console.log(modal);
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={createContext}>
        <p>
          <b>Name</b>
        </p>{" "}
        &nbsp;&nbsp;{" "}
        <input
          type="text"
          name="Firstname"
          placeholder="First Name"
          required
          autoFocus
          value={contact.Firstname}
          onChange={handlechange}
        ></input>
        &nbsp;&nbsp;
        <input
          type="text"
          name="Middlename"
          placeholder="Middle Name"
          autoFocus
          value={contact.Middlename}
          onChange={handlechange}
        ></input>
        &nbsp;&nbsp;
        <input
          type="text"
          name="Lastname"
          placeholder="Last Name"
          required
          autoFocus
          value={contact.Lastname}
          onChange={handlechange}
        ></input>
        <p>
          <b>Gender </b>
        </p>{" "}
        &nbsp;&nbsp;{" "}
        <select
          required
          name="gender"
          value={contact.gender}
          onChange={handlechange}
        >
          <option value="">Select Option </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Not to Say">Not to Say</option>
        </select>
        <p>
          <b>Email</b>
        </p>
        &nbsp;&nbsp;
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          autoFocus
          value={contact.email}
          onChange={handlechange}
        ></input>
        <p>
          <b> Phone Number</b>
        </p>
        &nbsp;&nbsp;
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          required
          autoFocus
          value={contact.number}
          onChange={handlechange}
        ></input>
        <p>
          <b> DOB</b>
        </p>
        &nbsp;&nbsp;
        <input
          type="date"
          name="dob"
          placeholder="Enter Your Name"
          required
          autoFocus
          value={contact.dob}
          onChange={handlechange}
        ></input>
        <p>
          <b> Qualification</b>
        </p>
        &nbsp;&nbsp;
        <input
          type="Qualification"
          name="Qualification"
          placeholder="Enter Your Name"
          required
          autoFocus
          value={contact.Qualification}
          onChange={handlechange}
        ></input>
        <p>
          <b> Address</b>
        </p>
        &nbsp;&nbsp;
        <input
          type="text"
          size="40"
          name="address"
          placeholder="Street Address"
          required
          autoFocus
          value={contact.address}
          onChange={handlechange}
        ></input>
        <br></br>
        <br></br>
        &nbsp;&nbsp;
        <input
          type="text"
          name="address1"
          size="40"
          placeholder="Street Address Line 2"
          autoFocus
          value={contact.address1}
          onChange={handlechange}
        ></input>
        <br></br>
        <br></br>
        &nbsp;&nbsp;
        <input
          type="text"
          name="city"
          size="17"
          placeholder="City"
          autoFocus
          value={contact.city}
          onChange={handlechange}
        ></input>
        &nbsp;&nbsp;
        <input
          type="text"
          name="state"
          size="17"
          placeholder="State"
          autoFocus
          value={contact.state}
          onChange={handlechange}
        ></input>{" "}
        <br></br>
        <br></br>
        &nbsp;&nbsp;
        <input
          type="text"
          name="zipcode"
          size="17"
          placeholder="Zip Code"
          autoFocus
          value={contact.zipcode}
          onChange={handlechange}
        ></input>
        &nbsp;&nbsp;
        <input
          type="text"
          name="country"
          size="17"
          placeholder="Country"
          autoFocus
          value={contact.country}
          onChange={handlechange}
        ></input>
        <p>
          <b>Course </b>
        </p>{" "}
        &nbsp;&nbsp;{" "}
        <select
          name="course"
          required
          value={contact.course}
          onChange={handlechange}
        >
          <option value="">Select Course </option>

          <option value="Basics of Coumputer">Basics of Coumputer </option>

          <option value="Java">Java</option>

          <option value="Python">Python</option>

          <option value="React">React </option>

          <option value="Node Js">Node JS</option>

          <option value="Javascript">Javascript</option>
        </select>
        <p>
          <b>Additional Comments</b>
        </p>{" "}
        &nbsp;&nbsp;
        <textarea
          name="Text1"
          cols="40"
          rows="5"
          placeholder="Type Here..."
          value={contact.Text1}
          onChange={handlechange}
        ></textarea>
        <p></p>&nbsp;&nbsp; <button>Submit</button>
      </form>
      {modal && (
        <div className="modal">
          <div className="overlay"> </div>
          <div className="modal-content">
            <h2>Registration Successfull</h2>
            <p>You have Successfully registered the course</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
