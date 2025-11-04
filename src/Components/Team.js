import React from "react";
import member1 from "../Images/member1.jpg";
import member2 from "../Images/member2.JPG";
import member3 from "../Images/member3.png";
import member4 from "../Images/member4.png";



const Team =()=>{
    const teamMembers =[
        {
            img:member1,
            name:"Anil Kumar",
            role:"Founder",
            desc:"Leads Strategy and vision."
        },
        {
            img:member2,
            name:"Vamsi Krishna",
            role:"CTO",
            desc:"Heads technology and innovation."
        },
        {
            img:member3,
            name:"Sai Teja",
            role:"Manager",
            desc:"Manage and Maintains."
        },
        {
            img:member4,
            name:"Lakshmi Kanth",
            role:"Technician",
            desc:"Checks and clears the problems."
        }

    ];
    return(
        <section id="team" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Meet Our Team</h2>
                <div className="row g-4">
                    {teamMembers.map((member,index)=>(
                        <div className="col-md-3 col-sm-6 text-center" key={index}>
                            <div className="card border-0 shadow-sm h-100">
                                <img src={member.img} alt={member.name} className="card-img-top rounded-circle p-3"/>
                                <div className="card-body ">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="text-primary fw-semibold mb-1">{member.role}</p>
                                    <p className="fst-italic text-muted small">{member.desc}</p>
                                    </div>
                                    </div>
                            
                    </div>
                    ))}

                </div>
            </div>
        </section>

    );

};
export default Team;