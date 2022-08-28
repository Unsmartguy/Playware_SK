import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../helpers/AuthContext";
import './Card.css';
import moment from "moment";

const Developer = () => {




    const {authState} = useContext(AuthContext);


    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [images, setImages] = useState([]);
    const [gamesList, setGameList] = useState([]);
    const [publisher, setPublisher] = useState("");


//-----------------------------------------New---------------------------------
    const [AddOnsList, setAddOnsList] = useState([]);
    const [AddOnsName, setAddOnsName] = useState("");
    const [GameName, setGameName] = useState("");
    const [Price, setPrice] = useState("");
  




    const DeleteAddOns = (AddOns_id) => {

       
              Axios.post("http://localhost:3001/AddOns", {
                AddOns_id:AddOns_id
                }).then((response) => {
                
                });
         
    };

    const addAddons= () => {

       
              Axios.post("http://localhost:3001/games/developed", {
                AddOnsName:AddOnsName,
                GameName:GameName,
                Price:Price,
                }).then((response) => {
                 toast.success(response.data)
                });
         
    };
    
  //-------------------------------------------------------------------------  
    



    const addGame = () => {

        if(authState.developer_status !== "registered") {
              toast.error("You're not registered yet! Please contact your publihser..")
              return;
        }
    
        const formData = new FormData();
    
        formData.append('image', images[0]);
    
        console.log(formData);
    
        const url = "https://api.imgbb.com/1/upload?key=bf474a7ad7a850314853ed811e1f83e3";
    
        fetch(url, {
          method: 'POST',
          body: formData
        }).then(res=>res.json())
        .then((result) => {
    
          console.log(result);
    
          if(result.success) {
              Axios.post("http://localhost:3001/games/developed", {
                  name: name,
                  genre: genre,
                  img_src: result.data.url,
                  developer_id: authState.developer_id
                }).then((response) => {
                 toast.success(response.data)
                });
          } else {
              toast.error("Image uploading failed!")
          }
          
        });
    };
    

 
 
    useEffect(() => {
      
        Axios.get(`http://localhost:3001/games/`).then((response) => {
            setGameList(response.data);
        });
  
         console.log(authState);
        
        if(authState.developer_id) {
          Axios.get(`http://localhost:3001/developers/getPublisher/${authState.developer_id}`).then((response) => {
              setPublisher(response.data);
          });
        }
       
    }, [authState]);


//-----------------------------------------New---------------------------------
    useEffect(() => {
      
        Axios.get(`http://localhost:3001/AddOns/`).then((response) => {
            setAddOnsList(response.data);
        });     
    }, []);
//--------------------------------------------------------------------------


  const pullGame=(game_id,state)=>{
    if(state==11)
    state=9
    if(state==10)
    state=8
    if(state==2)
    state=5
    if(state==3)
    state=6
    if(state==4)
    state=7
    Axios.put("http://localhost:3001/games/updateStatus", {
                state: state,
                game_id: game_id
            }).then((response) => {
                if(response.data.success)
                    toast.success("Successfully pulled the game from Store");
            });
  };

  const publishGame=(game_id,state)=>{
    if(state==1)
        state=2
        Axios.put("http://localhost:3001/games/updateStatus", {
            state: state,
            game_id: game_id
        }).then((response) => {
            if(response.data.success)
                toast.success("Successfully requested the game for publishing");
        });
    
    
    }





    return (
        <div className="container">
            <div className="py-4">




            <div className="row mb-4">  
                    <hr></hr>
                    <div className="col-lg-5"> <img src = "https://i.ibb.co/Bt6JCNj/708382-people-512x512.png" alt="developer" width = "300px" height="300px" />_</div>
                    <div className="col-lg-5">
                        <h2> <b>Your informations: </b></h2>
                        <hr></hr>   
                        <h4> Name:  {authState.developer_name}</h4>
                        <h4> Status:  {authState.developer_status}</h4>
                        <h4> Publisher: {publisher}</h4>
                        <hr></hr>
                        <h4> Total games: </h4>
                        <h4> Games in developed state: </h4>
                        <h4> Games in published state: </h4>
                        <h4> Games in store: </h4>
                        <br></br>
                    </div>
                    <div className="col-lg-2"></div>  
                </div>








               
                <div className="row mb-4">

                    <div className="col-lg-3"></div>

                    <div className="col-lg-6 border shadow rounded p-3">
                        <h2>Game Upload Section:</h2>


                    <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                    setName(event.target.value);
                  }}></input>
                  <label for="floatingInput">Name</label>
                </div>


                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                    setGenre(event.target.value);
                  }}></input>
                  <label for="floatingInput">Genre</label> 
                </div>


                <label className="mb-2">    Photo : </label> 
                        <br></br>
                    
                        <input type="file" accept="image/*" className="form-control mb-3"  placeholder="img.png/jpg/jpeg..." onChange={(event) => {
                        setImages([...event.target.files]);
                        }}></input>
<div className="row">
    <div className="col-lg-4"></div>
                <div className="col-lg-4"><button type="submit" className="btn btn-secondary container-fluid"  onClick={addGame}>Add</button></div> 
                <div className="col-lg-4"></div>  
                </div> 
                    
                    </div>
                    <div className="col-lg-3"></div>


                </div>












                <div className="row mb-4">
                  <h2>Developed Games List:</h2>
            <div className="col-lg-12 col-lg-6 border shadow rounded p-3">











            <div className="container">
               


                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>

          
                <h1 align="center">    List of your Games </h1>
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
                                                {//<b>Release date: </b> {moment(game.release_date).format("L")} 



                                                 }
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
                            
                                    {

                                                    game.status === "Developed" ? 
                                                    <div className='btn' >
                                                        <button type="submit" onClick={ () => 
                                                            publishGame(game.game_id,game.state)} >
                                                            <b>
                                                            Request To Publish
                                                            </b>
                                                        </button>
                                                    </div> : 
                                                    
                                                    <div className='btn' >
                                                        <button  type="submit" onClick={ () => 
                                                            pullGame(game.game_id,game.state)} >
                                                            <b>
                                                            Pull From Store
                                                            </b>
                                                        </button>
                                                
                                                     </div>
                                            }
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

          







          { //ADD ONS Portion-----------------------------------------------------------------------------------------------------------------------------------------------------------
}



                 
               
                <div className="row mb-4">

<div className="col-lg-3"></div>

<div className="col-lg-6 border shadow rounded p-3">
    <h2>Add Ons Upload Section:</h2>


<div class="form-floating mb-3">
<input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
setAddOnsName(event.target.value);
}}></input>
<label for="floatingInput">Name</label>
</div>


<div class="form-floating mb-3">
<input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
setGameName(event.target.value);
}}></input>
<label for="floatingInput">Game_Name</label> 
</div>

<div class="form-floating mb-3">
<input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
setPrice(event.target.value);
}}></input>
<label for="floatingInput">Price</label> 
</div>


<div className="row">
<div className="col-lg-4"></div>
<div className="col-lg-4"><button type="submit" className="btn btn-secondary container-fluid"  onClick={addAddons}>Add</button></div> 
<div className="col-lg-4"></div>  
</div> 

</div>
<div className="col-lg-3"></div>


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
                                                            DeleteAddOns(AddOns.AddOns_id)} >
                                                            <b>
                                                            Delete
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

export default Developer;