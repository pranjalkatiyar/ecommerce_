import React from "react";
import "./team.css";
const Team = () => {
   const details = [
    {
      name: "Zidane",
      image: "zidane",
      department: "Leadership & management",
      socialMedia: ["instagram", "medium", "linkedin"],
    }, 
    {
      name: "Toni Kroos",
      image: "tonikroos",
      department: "Product developer",
      socialMedia: ["medium", "linkedin"],
    },
    {
      name: "Iker Casillas",
      image: "ikercasillas",
      department: "Marketing strategy",
      socialMedia: ["medium"],
    },
    {
      name: "James",
      image: "james",
      department: "Product designer",
      socialMedia: ["instagram","medium","linkedin"],
      },
    {
      name: "Christiano Ronaldo",
      image: "christiano",
      department: "Financial operations",
      socialMedia: ["linkedin","facebook"],
    },
  ];

  return (
    <div className="team_container">
      <div className="teamheading">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      </div>
      <div className="team_details">
        {details.map((detail) => {
          return (
            <div className="team_cards">
              <div className="cardTeam row">
              <div className="carTeam_col">
                <div className="card_image">
                  <img src={require(`../../assests/${detail.image}.jpg`)} alt="team" />
                </div>
                <div className="card_content">
                  <div className="card_title">
                    <h2>{detail.name}</h2>
                  </div>
                  <div className="card_department">{detail.department}</div>
                </div>
                <div className="card_contact">
                {
                  detail.socialMedia.instagram!=undefined &&  <img src={detail.socialMedia.instagram} alt="instagram" />
                }
                {
                  detail.socialMedia.facebook!=undefined &&  <img src={detail.socialMedia.facebook} alt="instagram" />
                }
                {
                  detail.socialMedia.linkedin!=undefined &&  <img src={detail.socialMedia.linkedin} alt="instagram" />
                }
                {
                  detail.socialMedia.medium!=undefined &&  <img src={detail.socialMedia.instagram} alt="instagram" />
                }
                  {/* {detail.socialMedia.map((social) => {
                    return (
                      <img src={require(`../../assests/${social}.png`)} alt="social" />
                    );
                  })} */}
                {/* {
                  Object.keys(detail.socialMedia).map((key)=>{
                    var value = require(`../../assests/${detail.socialMedia[key]}.png`);
                    console.log(value);
                    return <img src={value} alt={detail.socialMedia[key]} />
                  }
                  )
                }  */}
                  {/* <img src={detail.socialMedia.medium} alt="medium" />
                  <img src={detail.socialMedia.linkedin} alt="linkedin" />
                  <img src={detail.socialMedia.facebook} alt="facebook" /> */}
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="teamheading">
        <h3>and you</h3>
      </div>
    </div>
  );
};

export default Team;

 