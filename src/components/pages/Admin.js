import Axios from "axios"
import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

import moment from 'moment';
import './Card.css';


const Admin= () => {






    const [gamesList, setGameList] = useState([]);
    const [publisherList, setPublisher] = useState([]);
    
  
    useEffect(() => {
        Axios.get(`http://localhost:3001/games/`).then((response) => {
            setGameList(response.data);
        });
  
      
    }, []);












    return (

        <div className="container">
            <div className="py-4">

            <div className="row mb-4">
                  <h2>Games List:</h2>
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3">









            <div className="container">
               


                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>

          
                
                <hr></hr>
                <br></br>

                

    
                <div className='wrapper'>
                    {   
                        gamesList.map((game, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    <div className='image-container' >
                                        
                                    <img src={game.img_src} alt={game.name} height="250px" width="290px" border="0" />
                                    </div>
                            
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{game.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <b> <i> Genre: {game.genre} </i></b>
                                                <br></br>
                                                <b>Release date: </b> {moment(game.release_date).format("L")}
                                                <br></br>
                                                <b>Price : </b> {game.price} $
                                                <br></br>
                                                <b>Total sales : </b> {game.total_sales}
                                                <br></br>
                                                <b>Status : </b> {game.status}
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button>
                                            <a href='/Game'>
                                               Store
                                            </a>
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button>
                                            <a href='/Game'>
                                            Pull
                                            </a>
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

            <div className="row mb-4">
                  <h2>Publisher List:</h2>
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3">









            <div className="container">
               


                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>

          
                <hr></hr>
                <br></br>

                

    
                <div className='wrapper'>
                    {   
                        publisherList.map((publisher, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    <div className='image-container' >
                                        
                                    <img src={publisher.img_src} alt={publisher.name} height="250px" width="290px" border="0" />
                                    </div>
                            
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{publisher.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <br></br>
                                                <b>Status: </b> {publisher.status}
                                                <br></br>
                                                <b> <i> Name: {publisher.name} </i></b>
                                                <br></br>
                                                <b>Number of Games: </b> {publisher.number}
                                                <br></br>
                                                <b>Earnings: </b> {publisher.earnings} $
                                                <br></br>
                                                <b>Developers: </b> {publisher.developers}
                                                
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button>
                                            <a href='/Game'>
                                               Add
                                            </a>
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button>
                                            <a href='/Game'>
                                               Remove
                                            </a>
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

export default Admin;