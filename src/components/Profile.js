import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "./data/data.json";

export default function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Find the user with the provided ID in the JSON data
    const foundUser = jsonData.users.find((u) => u.id === parseInt(userId));
    setUser(foundUser);
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className="row"
        style={{ borderBottom: "1px solid #545454", padding: "10px" }}
      >
        <div className="col-lg-6">
          <h2>Profile</h2>
        </div>
        <div
          className="col-lg-6"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <table>
            <tr>
              <td>
                <img style={{height:'30px',width:'30px',borderRadius:'50%'}} alt="Profile" src={user.profilepicture}></img>
              </td>
              <td>
                <span >{user.name}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-5"
          style={{ textAlign: "center", alignContent: "center",marginTop:'20px',borderRight:'1px solid' }}
        >
          <img src={user.profilepicture} alt={user.name} className="pimage" />
          <h2 className="ptext">{user.name}</h2>
          <h2 className="ptext">
            <span className="plabel">Username:</span> {user.username}
          </h2>
          <h2 className="ptext">
            <span className="plabel">e-mail:</span> {user.email}
          </h2>
          <h2 className="ptext">
            <span className="plabel">Phone:</span> {user.phone}
          </h2>
          <h2 className="ptext">
            <span className="plabel">website:</span> {user.website}
          </h2>
          <hr />
          <h2>
            <span className="plabel">Company</span>
          </h2>
          <h2 className="ptext">
            <span className="plabel">Name:</span> {user.company.name}
          </h2>
          <h2 className="ptext">
            <span className="plabel">catchphrase:</span>{" "}
            {user.company.catchPhrase}
          </h2>
          <h2 className="ptext">
            <span className="plabel">bs:</span> {user.company.bs}
          </h2>
        </div>
        <div className="col-lg-7">
          <h2>
            <span className="plabel">Address</span>
          </h2>
          <h2 className="ptext lilleft">
            <span className="plabel">Street:</span> {user.address.street}
          </h2>
          <h2 className="ptext lilleft">
            <span className="plabel">Suite:</span> {user.address.suite}
          </h2>
          <h2 className="ptext lilleft">
            <span className="plabel">City:</span> {user.address.city}
          </h2>
          <h2 className="ptext lilleft">
            <span className="plabel">Zipcode:</span> {user.address.zipcode}
          </h2>
          <iframe
           title="map"
            width="100%"
            height="400"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed/v1/place?q={user.geo.lat},{user.geo.lng}&key=YOUR_API_KEY"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
