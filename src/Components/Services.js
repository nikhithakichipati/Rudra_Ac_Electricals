import React from "react";
import service_image from"../Images/service_image.jpg";
import installation_image from "../Images/instalation_image.jpg";
import repair_image from "../Images/repair_image.jpg";
import gasfilling_image from "../Images/gasfilling_image.jpg";
import {Link} from "react-router-dom";

const Services=()=>{
    const serviceData=[
        {
            title:"AC SERVICING",
            description:"Keep your AC running smoothly with our professional cleaning and maintenance.",
            img:service_image,
            link:"/services/servicing",
        },
        {
            title:"INSTALLTION",
            description:"Expert AC installation for your home or office with precise fitting and setup.",
            img:installation_image,
            link:"/services/installation",
        },
        {
            title:"AC REPAIRS",
            description:"Quick and reliable AC repairs to restore your cooling comfort.",
            img:repair_image,
            link:"/services/repairs",
        },
        {
            title:"GAS FILLING",
            description:"Safe and fast AC refrigerant gas refilling for better cooling performance.",
            img:gasfilling_image,
            link:"/services/gasfilling",
        }
    ];
    return(
        <section id="services" className="service-section py-5 ">
            <div className="container">
                <h2 className="text-center mb-4">Our AC Services</h2>
                <div className="row">
                    {serviceData.map((service,index)=>(
                        <div key={index} className="col-md-6 col-lg-3 mb-4">
                            <div className="card shadow-sm h-100">
                                <img src={service.img} className="card-img-top mt-2" alt={service.title} style={{ height: "200px", objectFit: "cover" }}/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <Link to={service.link} className="btn btn-primary mt-auto">Learn More</Link>
                                </div>
                                </div>
                                </div>
                                
                    ))}
                </div>
            </div>


        </section>
    );
    };
    export default Services;