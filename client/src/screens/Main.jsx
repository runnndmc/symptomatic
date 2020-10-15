import React from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <>
      <h2>Hello!</h2>


      <Link>
        <div>
          <h5>My Calendar</h5>
        </div>
      </Link>


      <div className="all-symptoms">
        
      
            <Link to="/symptoms">
              <div>
                <h5>My Symptoms</h5>
              </div>
            </Link>
        
      </div>


      <Link>
        <div>
          <h5>New Symptom</h5>
        </div>
      </Link>
      
    </>
  );
};

export default Main;
