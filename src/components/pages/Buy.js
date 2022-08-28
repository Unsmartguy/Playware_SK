import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../helpers/AuthContext";
import './Card.css';
import moment from "moment";





const Buy = () => {




    const [AddOnsList, setAddOnsList] = useState([]);

    useEffect(() => {
      
        Axios.get(`http://localhost:3001/AddOns/`).then((response) => {
            setAddOnsList(response.data);
        });
  
         
        
       
       
    }, []);


    const BuyAddOns= (AddOns_id) => {

       
        Axios.post("http://localhost:3001/AddOns", {
          AddOns_id:AddOns_id
          }).then((response) => {
          
          });
    
    };
    

    return (

        <div className="container">
            <div className="py-4">






            <div className="row mb-4">
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3"><img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /></div>
            </div>

            <div className="row">
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3">
                <div className="row">
                    <div className="col-lg-6 col-lg-6 border shadow rounded p-3"></div><div className="col-lg-6 col-lg-6 border shadow rounded p-3"></div>
                </div>
            </div>
            </div>

           






<div className="row mb-4">
                  <h2>AddOns:</h2>
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3">











            <div className="container">
               


                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>

          
                <h1 align="center">    List pf AddOns </h1>
                <hr></hr>
                <br></br>

                

    
                <div className='wrapper'>
                    {   
                        AddOnsList.map((AddOns, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                   
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{AddOns.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                               
                                                <br></br>
                                                <b>Price : </b> {AddOns.price} $
                                                <br></br>
                                                <b>Total sales : </b> {AddOns.Game}
                                                <br></br>
                                               
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    
                                                  
                                                    <div className='btn' >
                                                        <button type="submit" onClick={ () => 
                                                            BuyAddOns(AddOns.AddOns_id)} >
                                                            <b>
                                                            Buy
                                                            </b>
                                                        </button>
                                                    </div> 
                                                    
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>

                               
                            );
                        })
                    }
                </div>

           
        </div>

            </div>
            </div>


</div>
</div>

    );
};

export default Buy;