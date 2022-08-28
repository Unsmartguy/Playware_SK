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
    const [userList, setUser] = useState([]);
    const [subList, setSub] = useState([]);
    const [dealsList, setDeals] = useState([]);
    const [devCut, setDevCut] = useState();
    const [pubCut, setPubCut] = useState();

    const [SubName, setSubName] = useState();
    const [Price, setPrice] = useState();
    const [dealsName, setDealsName] = useState();
    const [cut, setCut] = useState();
    

    
  
    useEffect(() => {
        Axios.get('http://localhost:3001/games/').then((response) => {
            setGameList(response.data);
        });
    }, []);

    useEffect(() => {
        Axios.get('http://localhost:3001/Publisher/').then((response) => {
            setPublisher(response.data);
        });
    }, []);

    useEffect(() => {
        Axios.get('http://localhost:3001/users/').then((response) => {
            setUser(response.data);
        });
    }, []);

    useEffect(() => {
        Axios.get('http://localhost:3001/Subscription/').then((response) => {
            setSub(response.data);
        });
    }, []);
    useEffect(() => {
        Axios.get('http://localhost:3001/Deals/').then((response) => {
            setDeals(response.data);
        });
    }, []);


    const SubAdd=(game_id,state)=>{
                  
        Axios.post('http://localhost:3001/subs/operation',{
            SubName:SubName,
            Price:Price
        });
      };


      const DealsAdd=(game_id,state)=>{
                  
        Axios.post('http://localhost:3001/deals/operation',{
            dealsName:dealsName, 
            cut:cut
        });
      };




    const deleteGame=(game_id,state)=>{
        if(state==10)
            state=2
        if(state==8)
            state=5
        if(state==6)
            state=5
        if(state==3) 
            state=2           
        Axios.post('http://localhost:3001/game/operation',{
            id:game_id, 
            state:state
        });
      };

      const storeGame=(game_id,state)=>{
        if(state==10)
            state=11
        if(state==8)
            state=9
        if(state==6)
            state=7
        if(state==3)
            state=4
        Axios.post('http://localhost:3001/game/operation',{
            id:game_id, 
            state:state ,
            devCut:devCut,
            pubCut:pubCut
        });
      };

      const pullGame=(game_id,state)=>{
        if(state==11)
            state=10
        if(state==9)
            state=8
        if(state==7)
            state=6
        if(state==4)
            state=3
        Axios.post('http://localhost:3001/game/operation',{
            id:game_id, 
            state:state 
        });
      };

      const addPublisher=(publisher_id,state)=>{
        if(state==1)
            state=2;
        Axios.post('http://localhost:3001/publisher/operations',{
            id:publisher_id, 
            state:state
        });
      };

      const removePublisher=(publisher_id,state)=>{

        Axios.post('http://localhost:3001/publisher/remove',{
            id:publisher_id, 
        });
      };

      const suspendPublisher=(publisher_id,state)=>{
        if(state==2)
        state=1;
        Axios.post('http://localhost:3001/publisher/operations',{
            id:publisher_id, 
            state:state
        });
      };

      const removeUser=(user_id)=>{
        Axios.post('http://localhost:3001/users/remove',{
            id:user_id, 
        });
      };

      const removeSubscription=(subscription_id)=>{
        Axios.post('http://localhost:3001/subscription/remove',{
            id:subscription_id, 
        });
      };

      const removeDeals=(deals_id)=>{
        Axios.post('http://localhost:3001/deals/remove',{
            id:deals_id, 
        });
      };

    return (
        <div className="container">
            <div className="py-4">








            <div className=" row">
<div className="col-lg-1"></div>

<div className="col-lg-11 rounded p-3 p-3">

     <div className="row mb-3">
             <div className="col-lg-6 hover-container-b bg-white border shadow rounded p-3 mx-4 " > <img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /></div> 
             <div className="col-lg-3"> 
                 <div className="row border hover-container bg-white shadow rounded p-3 mb-3" ><img className="container-fluid"  src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /></div>
                 <div className="row border hover-container bg-white shadow rounded p-3 " ><img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /></div>   
             </div>
     </div>

     <div className="row">
         <div className="col-lg-3 mx-3">
             <div className="row">
                 <div className="col border hover-container bg-white shadow rounded p-3 mx-2">   
                 <img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" />   
                 </div>
                 <div className="col "> 
                     <div className="row mb-2 border hover-container bg-white shadow rounded p-3 mb-3"><img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /> </div> 
                     <div className="row border hover-container bg-white shadow rounded p-3"><img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /> </div> 
                 </div>  
             </div>
         </div>
         <div className="col-lg-3 border hover-container bg-white shadow rounded p-3 mx-1"><img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /></div> 
         <div className="col-lg-3  border hover-container bg-white shadow rounded p-3 mx-1"><img className="container-fluid" src="https://i.ibb.co/88Vw6Ct/valorant.jpg"  border="0" /></div>  
     </div>
     </div>
</div>



















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

                                    <input type="integer" id="updateInput" onChange={(e)=>{setDevCut(e.target.value)}}></input>
                                    <input type="integer" id="updateInput" onChange={(e)=>{setPubCut(e.target.value)}}></input>
                            
                                    <div className='btn'>
                                        <button onClick={()=>{deleteGame(game.id,game.state)}}>
                                               Delete
                                        </button>
                                        
                                    </div>
                            
                                    <div className='btn'>
                                        <button onClick={()=>{storeGame(game.id,game.state)}}>
                                               Store
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button onClick={()=>{pullGame(game.id,game.state)}}>
                                               Pull from store
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
                                                <b>Developers: </b> {publisher.developer_number}
                                                
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button onClick={()=>{addPublisher(publisher.id,publisher.state)}}>
                                               Add
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button onClick={()=>{removePublisher(publisher.id,publisher.state)}}>
                                               Remove
                                        </button>
                                        
                                    </div>
                                    <div className='btn'>
                                        <button onClick={()=>{suspendPublisher(publisher.id,publisher.state)}}>
                                               Suspend
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
                  <h2>User List:</h2>
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
                        userList.map((user, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                   
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{user.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                        
                                                <br></br>
                                                <b> <i> Name: {user.name} </i></b>
                                                <br></br>
                                                <b>Number of Owned Games: </b> {user.number}
                                                <br></br>
                                                <b>Credit: </b> {user.credit}
                                                <br></br>
                                                
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                            
                                    <div className='btn'>
                                        <button onClick={()=>{removeUser(user.id)}}>
                                               Suspend
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




{//Subscription Section--------------------------------------------------------------------------------------------------
}





            <div className="row mb-4">

<div className="col-lg-3"></div>

<div className="col-lg-6 border shadow rounded p-3">
    <h2>Subscription Uploading Section:</h2>


<div class="form-floating mb-3">
<input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
setSubName(event.target.value);
}}></input>
<label for="floatingInput">Name</label>
</div>



<div class="form-floating mb-3">
<input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
setPrice(event.target.value);
}}></input>
<label for="floatingInput">Price</label> 
</div>


<div className="row">
<div className="col-lg-4"></div>
<div className="col-lg-4"><button type="submit" className="btn btn-secondary container-fluid"  onClick={SubAdd}>Add</button></div> 
<div className="col-lg-4"></div>  
</div> 

</div>
<div className="col-lg-3"></div>


</div>






            <div className="row mb-4">
                  <h2>Subscription List:</h2>
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
                        subList.map((subscription, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{subscription.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <br></br>
                                                <b> <i> Name: {subscription.name} </i></b>
                                                <br></br>
                                                <b>Number of Games: </b> {subscription.number}
                                                <br></br>
                                                <b>Monthly Payment: </b> {subscription.price}
                                                <br></br>
                                                  
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button onClick={()=>{removeSubscription(subscription.id)}}>
                                               Remove
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


{//Deals Section--------------------------------------------------------------------------------------------------
}


            <div className="row mb-4">

<div className="col-lg-3"></div>

<div className="col-lg-6 border shadow rounded p-3">
    <h2>Deals Upload Section:</h2>


<div class="form-floating mb-3">
<input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
setDealsName(event.target.value);
}}></input>
<label for="floatingInput">Name</label>
</div>



<div class="form-floating mb-3">
<input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
setCut(event.target.value);
}}></input>
<label for="floatingInput">Cut</label> 
</div>


<div className="row">
<div className="col-lg-4"></div>
<div className="col-lg-4"><button type="submit" className="btn btn-secondary container-fluid"  onClick={DealsAdd}>Add</button></div> 
<div className="col-lg-4"></div>  
</div> 

</div>
<div className="col-lg-3"></div>


</div>



            <div className="row mb-4">
                  <h2>Deals List:</h2>
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
                        dealsList.map((deals, key)=> {
                            
                            return(
                                <div className = 'card-container' key={key}>
                                    
                                    <div className='=card-content'>
                                        <div className='card-title'>
                                            <h3>{deals.name}</h3>
                                        </div>
                            
                                        <div className='card-body'>
                                            <p>
                                                <br></br>
                                                <b> <i> Name: {deals.name} </i></b>
                                                <br></br>
                                                <b>Number of Games: </b> {deals.number}
                                                <br></br>
                                                <b>Cut: </b> {deals.cut}%
                                                <br></br>
                                                  
                                            </p>
                                            
                                        </div>
                            
                                    </div>

                                    <br></br>
                            
                                    <div className='btn'>
                                        <button onClick={()=>{removeDeals(deals.id)}}>
                                               Remove
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