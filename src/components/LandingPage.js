import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsonData from "./data/data.json";

export default function LandingPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(jsonData.users);
  }, []);

  return (
    <div>
      <div className="limiter">
        <div className="maincontainer">
          <div className="userswraper">
            <div className="selac">
              <h1>Select an account</h1>
            </div>
            <div className="userlist">
              <ul>
                {users.map((user) => (
                  <li key={user.id}>
                    <Link className="landingancor" to={`/user/${user.id}`}>
                      <table className="tablewraper">
                        <tr>
                          <td>
                            <img
                              className="userimglist"
                              src={user.profilepicture} alt="Profile"
                            ></img>
                          </td>
                          <td>
                            <span className="username">{user.name}</span>
                          </td>
                        </tr>
                      </table>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
