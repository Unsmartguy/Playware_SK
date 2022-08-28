import Axios from "axios"
import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";

import moment from 'moment';
import './Card.css';


const Publisher= () => {

    const [gamesList, setGameList] = useState([]);
    const [developerList, setDeveloper] = useState([]);
    const [price, setPrice] = useState();                   //NEW>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/games/getlist`).then((response) => {
            setGameList(response.data);
        });
        Axios.get(`http://localhost:3001/games/getlist`).then((response) => {
            setDeveloper(response.data);
        }); 
    }, []);



    const publishGame=(game_id,state)=>{
    if(state==2)
        state=3;
    if(state==5)
        state=6;
        Axios.post('http://localhost:3001/games/operations',{
            id:game_id,  //id will be accessible from back
            price: price,
            state:state
        });
      };

      const pullGame=(game_id,state)=>{
        if(state==3)
            state=10;
        if(state==4)
            state=11;
        if(state==6)
            state=8;
        if(state==7)
            state=9;
        Axios.post('http://localhost:3001/games/operations',{
            id:game_id,  
            state:state
        });
      };

      const deleteGame=(game_id,state)=>{
        if(state==5&&state==2)
            state=1;
        Axios.post('http://localhost:3001/games/operations',{
            id:game_id, 
            state:state
        });
      };

      const acceptDeveloper=(developer_id,state)=>{
        if(state==1)
            state=2
            Axios.post('http://localhost:3001/developers/operation',{
                id:developer_id, 
                state: state
            });
      };

      const suspendDeveloper=(developer_id,state)=>{
        if(state==2)
            state=1
        Axios.post('http://localhost:3001/developers/operation',{
            id:developer_id, 
            state: state
        });
      };


      const removeDeveloper=(developer_id,state)=>{
        Axios.post('http://localhost:3001/developers/remove',{
            id:developer_id, 
        });
      };





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



                                    <input type="integer" id="updateInput" onChange={(e)=>{setPrice(e.target.value)}}></input>
                            
                                    <div className='btn'>
                                        <button onClick={()=>{publishGame(game.id,game.state)}}>
                                               Publish
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button onClick={()=>{pullGame(game.id,game.state)}}>
                                            Request to pull from store
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button onClick={()=>{deleteGame(game.id,game.state)}}>
                                            Delete
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
                  <h2>Developer List:</h2>
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
                        developerList.map((developer, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    <div className='image-container' >
                                        
                                    <img src={developer.img_src} alt={developer.name} height="250px" width="290px" border="0" />
                                    </div>
                            
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{developer.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <br></br>
                                                <b>Status: </b> {developer.status}
                                                <br></br>
                                                <b> <i> Name: {developer.name} </i></b>
                                                <br></br>
                                                <b>Number of Games: </b> {developer.number}
                                                <br></br>
                                                <b>Earnings: </b> {developer.earnings} $
                                                <br></br>
                                                <b>state: </b> {developer.state}
                                                <br></br>
                                               
                                                
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button onClick={()=>{acceptDeveloper(developer.id,developer.state)}}>
                                               Accept
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button onClick={()=>{removeDeveloper(developer.id,developer.state)}}>
                                               Remove
                                        </button>
                                        
                                    </div>

                                    <div className='btn'>
                                        <button onClick={()=>{suspendDeveloper(developer.id,developer.state)}}>
                                               suspend
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

export default Publisher;