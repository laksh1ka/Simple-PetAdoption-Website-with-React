/*import React from "react";
import {useEffect,useState} from'react';
import { Link } from 'react-router-dom';
import './Search.css';
function Search({petDetails})
{
    return(
        <div>
             <div className='search bar'>
                <h1 style={{ color: 'orange', display: 'inline-block', marginLeft: '10px',fontFamily:'cursive' }}>Paws4U</h1>
                <button className='categoriesbtn' style={{ marginRight: '2px', marginLeft: '35px',backgroundColor:'white',border:'none',height:'30px' }}>=</button>
                <h3 style={{ display: 'inline-block' }}>Categories</h3>
                <input type="text" className='search' placeholder='🔍Search for anything' style={{ borderRadius: '20px', width: '750px', marginRight: '10px', height: '50px', marginLeft: '20px', fontSize: '15px' }}></input>
                <Link to='/Login'><h3 className='btf1'>Login</h3></Link>
                <h4 className='btf'>Profile👤</h4>
                <Link to='/'><h4 className='btf'>home🏠</h4></Link>
                <br></br>
                <br></br>
                <Link to='/Postadop'><button className="btn1" >Post for Adoption  </button></Link>
                <button className='btn'>Deals</button>
                <button className='btn'>Favorites</button>
                <Link to='/SignIn'><button className='btn'>Register</button></Link>
                <br></br>
                <hr />
            </div>
            <div>
                <div className="card1">
                <img  style={{width:'100%',height:'70%'}} src="data:image/jpeg;base64,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" ></img>
                <   div className='imgdes'> 
                    <p className='details'>Name: Tobi</p>
                    <p className='details'> Breed: Corgi</p>
                    <p className='details'> Age: 18 Months</p>
                    </div>
                </div>
                <div className="card1">
                <img  style={{width:'100%',height:'70%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfB8m0RKXnybvPx289yj_WI1U-EG-f5S-UTg&s" ></img>
                <   div className='imgdes'> 
                <p className='details'>Name: Milo</p>
                    <p className='details'> Breed: Ragdoll</p>
                    <p className='details'> Age: 21 Months</p>
                    </div>
                </div>
                <div className="card1">
                <img  style={{width:'100%',height:'70%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQciQFA-gWdPuL8euC5RGJRsKCHNZyLVmLpew&s" ></img>
                <   div className='imgdes'> 
                <p className='details'>Name: Jimmy</p>
                    <p className='details'> Breed: -</p>
                    <p className='details'> Age: 10 Months</p>
                    </div>
                </div>
                <div  className="card1">
                <img  style={{width:'100%',height:'70%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7xO9iKc2APkQPClBlQ5U4CLZgV3aXdkJzg&s" ></img>
                <   div className='imgdes'> 
                <p className='details'>Name: Jermy</p>
                    <p className='details'> Breed: Golden Retriver</p>
                    <p className='details'> Age: 25 Months</p>
                    </div>
                   
                </div>
                

            </div>
            <div>
                {petDetails.length > 0 ? (
                    petDetails.map((pet, index) => (
                        <div key={index} className="card1">
                            <img style={{ width: '100%', height: '70%' }} src={URL.createObjectURL(pet.photos)} alt={pet.name}></img>
                            <h3>{pet.name}</h3>
                            <p>Type: {pet.type}</p>
                            <p>Age: {pet.age}</p>
                            <p>Gender: {pet.gender}</p>
                            <p>Description: {pet.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No pets available for adoption.</p>
                )}
            </div>
        </div>
    );
}
export default Search*/


import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Search.css';

function Search() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pets');
        if (response.ok) {
          const data = await response.json();
          setPets(data);
        } else {
          console.error('Failed to fetch pet details');
        }
      } catch (error) {
        console.error('There was an error fetching the pets!', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="logindiv" style={{height:'auto'}}>
      <div className='search-bar' style={{backgroundColor:'white'}}>
        <h1 style={{ color: 'orange', display: 'inline-block', marginLeft: '10px', fontFamily: 'cursive' }}>Paws4U</h1>
        <button className='categoriesbtn' style={{ marginRight: '2px', marginLeft: '35px', backgroundColor: 'white', border: 'none', height: '30px' }}>=</button>
        <h3 style={{ display: 'inline-block', color:'orange'}}>Categories</h3>
        <input type="text" className='search' placeholder='🔍 Search for anything' style={{ borderRadius: '20px', width: '750px', marginRight: '10px', height: '50px', marginLeft: '20px', fontSize: '15px' }} />
        <Link to='/Login'><h3 className='btf1'>Login</h3></Link>
        <Link to='/Profile'><h4 className='btf'>Profile 👤</h4></Link>
        <Link to='/'><h4 className='btf' style={{marginLeft:'9px'}}>Home 🏠</h4></Link>
        <br />
        <br />
        <Link to='/Postadop'><button className="btn1">Post for Adoption</button></Link>
        <Link to='/Search'><button className='btn'>Available Pets</button></Link>
        <button className='btn'>Favorites</button>
        <Link to='/SignIn'><button className='btn'>Register</button></Link>
        <br />
        <hr />
      </div>
      <div className='cards-container'>
      <div className="card1">
                <img  style={{width:'100%',height:'70%'}} src="data:image/jpeg;base64,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" ></img>
                <   div className='imgdes'> 
                    <h4 className='details'>Name: Tobi</h4>
                    <p className='details'> Breed: Corgi</p>
                    <p className='details'> Age: 18 Months</p>
                    </div>
                </div>
                <div className="card1">
                <img  style={{width:'100%',height:'70%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfB8m0RKXnybvPx289yj_WI1U-EG-f5S-UTg&s" ></img>
                <   div className='imgdes'> 
                <h4 className='details'>Name: Milo</h4>
                    <p className='details'> Breed: Ragdoll</p>
                    <p className='details'> Age: 21 Months</p>
                    </div>
                </div>
                <div className="card1">
                <img  style={{width:'100%',height:'70%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQciQFA-gWdPuL8euC5RGJRsKCHNZyLVmLpew&s" ></img>
                <   div className='imgdes'> 
                <h4 className='details'>Name: Jimmy</h4>
                    <p className='details'> Breed: -</p>
                    <p className='details'> Age: 10 Months</p>
                    </div>
                </div>
                <div  className="card1">
                <img  style={{width:'100%',height:'70%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7xO9iKc2APkQPClBlQ5U4CLZgV3aXdkJzg&s" ></img>
                <   div className='imgdes'> 
                <h4 className='details'>Name: Jermy</h4>
                    <p className='details'> Breed: Golden Retriver</p>
                    <p className='details'> Age: 25 Months</p>
                    </div>
                   
                </div>
                
        {pets.map(pet => (
          <div className="card1" key={pet.name}>
            <img style={{width:'100%',height:'70%'}} src={pet.logo} alt={pet.name} />
            <h4 className='details'>Name:{pet.name}</h4>
            <p className='details'>Breed:{pet.type}</p>
            <p className='details'>Age:{pet.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
