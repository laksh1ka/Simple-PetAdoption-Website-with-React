/*import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
function SignIn(){
    return(
        <div className='logindiv' style={{height:'900px'}}>
            <div className='search bar' style={{backgroundColor:'white'}}>
                <h1 style={{ color: 'orange', display: 'inline-block', marginLeft: '10px',fontFamily:'cursive' }}>Paws4U</h1>
                <button className='categoriesbtn' style={{ marginRight: '2px', marginLeft: '35px',backgroundColor:'transparent',border:'none',height:'30px' }}>=</button>
                <h3 style={{ display: 'inline-block' }}>Categories</h3>
                <input type="text" className='search' placeholder='🔍Search for anything' style={{ borderRadius: '20px', width: '750px', marginRight: '10px', height: '50px', marginLeft: '20px', fontSize: '15px' }}></input>
                <Link to='/Login'><h3 className='btf1'>Login</h3></Link>
                <h4 className='btf'>Profile👤</h4>
                <Link to='/'><h4 className='btf'>home🏠</h4></Link>
                <br></br>
                <br></br>
                <Link to='/Postadop'><button className="btn1">Post for Adoption  </button></Link>
                <button className='btn'>Deals</button>
                <button className='btn'>Favorites</button>
                <Link to='/SignIn'><button className='btn'>Register</button></Link>
                <br></br>
                <hr />
            </div>
            <form style={{padding:'90px',marginLeft:'70px',backgroundColor:'white',marginTop:'50px',marginRight:'70px'}}>
                <h1 style={{color:'orange'}}>Sign Up</h1>
                <div className='loginbox' style={{border:'1px solid black', textAlign:'150px',paddingTop:'90px',paddingBottom:'90px'}}>
                <label style={{marginLeft:'50px',fontSize:'30',color:'orange'}}>Name</label>
                
                <input type="text" style={{marginLeft:'125px'}}></input>
                <br></br>
                <br></br>
                <label style={{marginLeft:'50px',fontSize:'30',color:'orange'}}>Age</label>
                
                <input type="text" style={{marginLeft:'140px'}}></input>
                <br></br>
                <br></br>
                <label style={{marginLeft:'50px',fontSize:'30',color:'orange'}}>Phone no.</label>
                
                <input type="text" style={{marginLeft:'95px'}}></input>
                <br></br>
                <br></br>
                
                <label style={{marginLeft:'50px',fontSize:'30',color:'orange'}}>Username</label>
                
                <input type="text" style={{marginLeft:'95px'}}></input>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-PNlQlVb9vh9pDaKE5UXvtQh2S-ck4jJsQ&s" style={{float:'right',marginRight:'150px',marginBottom:'200px',display:'inline-block'}}></img>
                
                <br></br>
                <br></br>
                <label style={{marginLeft:'50px',color:'orange'}}>Password</label>
                <input type="password" style={{marginLeft:'100px'}}></input>
                <br></br>
                <br></br>
                <br></br>
                <button className="Signinbtn" style={{width:'200px',marginLeft:'50px',backgroundColor:'white',color:'orange'}}>Sign up</button><br></br><br></br>
                {//<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-PNlQlVb9vh9pDaKE5UXvtQh2S-ck4jJsQ&s" style={{float:'right'}}></img>
                }</div>
            </form>
        </div>
    );
}
export default SignIn*/


import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

function SignIn() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            age,
            phone,
            username,
            password
        };

        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        if (data.message === 'User created successfully') {
            alert('User registered successfully');
        } else {
            alert(data.message);
        }
    };

    return (
        <div className='logindiv' style={{ height: '1000px' }}>
            <div className='search bar' style={{ backgroundColor: 'white' }}>
                <h1 style={{ color: 'orange', display: 'inline-block', marginLeft: '10px', fontFamily: 'cursive' }}>Paws4U</h1>
                <button className='categoriesbtn' style={{ marginRight: '2px', marginLeft: '35px', backgroundColor: 'transparent', border: 'none', height: '30px' }}>=</button>
                <h3 style={{ display: 'inline-block', color:'orange' }}>Categories</h3>
                <input type="text" className='search' placeholder='🔍Search for anything' style={{ borderRadius: '20px', width: '750px', marginRight: '10px', height: '50px', marginLeft: '20px', fontSize: '15px' }}></input>
                <Link to='/Login'><h3 className='btf1'>Login</h3></Link>
                <Link to='/Profile'><h4 className='btf'>Profile👤</h4></Link>
                <Link to='/'><h4 className='btf'>home🏠</h4></Link>
                <br></br>
                <br></br>
                <Link to='/Postadop'><button className="btn1">Post for Adoption  </button></Link>
                <Link to='/Search'><button className='btn'>Available Pets</button></Link>
                <button className='btn'>Favorites</button>
                <Link to='/SignIn'><button className='btn'>Register</button></Link>
                <br></br>
                <hr />
            </div>
            <form onSubmit={handleSubmit} style={{ padding: '90px', marginLeft: '70px', backgroundColor: 'white', marginTop: '40px', marginRight: '70px' , marginBottom:'20px'}}>
                <h1 style={{ color: 'orange' }}>Sign Up</h1>
                <div className='loginbox' style={{ border: '1px solid black', textAlign: '150px', paddingTop: '90px', paddingBottom: '90px' }}>
                    <label style={{ marginLeft: '50px', fontSize: '30', color: 'orange' }}>Name</label>
                    <input type="text" style={{ marginLeft: '125px' }} value={name} onChange={(e) => setName(e.target.value)} />
                    <br></br>
                    <br></br>
                    <label style={{ marginLeft: '50px', fontSize: '30', color: 'orange' }}>Age</label>
                    <input type="text" style={{ marginLeft: '140px' }} value={age} onChange={(e) => setAge(e.target.value)} />
                    <br></br>
                    <br></br>
                    <label style={{ marginLeft: '50px', fontSize: '30', color: 'orange' }}>Phone no.</label>
                    <input type="text" style={{ marginLeft: '95px' }} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <br></br>
                    <br></br>
                    <label style={{ marginLeft: '50px', fontSize: '30', color: 'orange' }}>Username</label>
                    <input type="text" style={{ marginLeft: '95px' }} value={username} onChange={(e) => setUsername(e.target.value)} />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-PNlQlVb9vh9pDaKE5UXvtQh2S-ck4jJsQ&s" style={{ float: 'right', marginRight: '150px', marginBottom: '200px', display: 'inline-block' }}></img>
                    <br></br>
                    <br></br>
                    <label style={{ marginLeft: '50px', color: 'orange' }}>Password</label>
                    <input type="password" style={{ marginLeft: '100px' }} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className="Signinbtn" style={{ width: '200px', marginLeft: '50px', backgroundColor: 'white', color: 'orange' }}>Sign up</button><br></br><br></br>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
