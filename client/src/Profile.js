import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
function Profile() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  const fetchLoggedInUser = () => {
    fetch('http://localhost:5000/loggedinuser')
      .then(response => response.json())
      .then(data => {
        setLoggedInUser(data);
      })
      .catch(error => {
        console.error('Error fetching logged-in user:', error);
      });
  };

  const handleSignOut = () => {
    fetch('http://localhost:5000/logout', { method: 'POST' })
      .then(response => response.json())
      .then(() => {
        setLoggedInUser(null);
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div className='logindiv'>
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
      {loggedInUser ? (
        <div style={{backgroundColor:'white',marginLeft:'100px',marginTop:'80px',marginRight:'80px',height:'610px'}}>
          <h1 style={{textAlign:'center' , color:'orange'}}>User Profile</h1>
          <img  className="user" src="data:image/png;base64,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"></img>
          <h2 className='userdetails'>Name: {loggedInUser.name}</h2>
          <h2 className='userdetails'>Age: {loggedInUser.age}</h2>
          <h2 className='userdetails'>Phone: {loggedInUser.phone}</h2>
          <h2 className='userdetails'>Username: {loggedInUser.username}</h2>
          
          <br></br>
          <br></br>
          <button className='signout' onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please log in to view your profile.</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
