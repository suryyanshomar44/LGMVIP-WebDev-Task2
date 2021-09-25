import React, { useState } from "react";

function UseEffect() {

  const [users, setUser] = useState([]);
  const [load, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 900);

    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    setUser([]);
    setTimeout(() => {
      setUser(users.data);
    }, 1000);

  };

  return (
    <>
    <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
      <div className="nav">
            <h1>LETSGROWMORE</h1>
      </div>
          <div className="btn">
            <button className="button" onClick={fetchData}>Get Users</button>
            
         <div className="loader">
           <div className="check">
               <span className="check-one"></span>
               <span className="check-two"></span>
           </div>
         </div>
        </div>
      <div className="card_container">
        {users?.map((curr, index) => {
          return (
            <div className="card" key={index}>
              <img src={curr.avatar} alt={curr.id} />
              <div className="content">
                <h3>{curr.id}</h3>
                <h2>
                  {curr.first_name} {curr.last_name}
                </h2>
                <p>{curr.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UseEffect;