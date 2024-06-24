/*import React from 'react';
import './Postadop.css';
import { Link } from 'react-router-dom';
function Postadop(){
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [des, setDes] = useState('');   
    return(
        <div className='main'>
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
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <h1 style={{color:'orange',textAlign:'center'}}>Rehome A Pet</h1>
            <br></br>
            <h3 style={{color:'orange',marginLeft:'100px'}}>Pet Details</h3>
            <form className='formbox' style={{padding:'90px',margin:'100px', marginTop:'0px',backgroundColor:'white'}}>
                <lable className="inputelements">Pet's Name</lable>
                <input type='text' className='inputfields'></input>
                <br></br>
                <br></br>
                <lable className="inputelements" >Pet Type</lable>
                <input type='text' className='inputfields'style={{marginLeft:'70px'}}></input>
                <br></br>
                <br></br>
                <lable className="inputelements" >Pet's Age</lable>
                <input type='text' className='inputfields'style={{marginLeft:'60px'}}></input>
                <br></br>
                <br></br>
                <lable className="inputelements" >Pet's Gender</lable>
                <input type='text' className='inputfields'style={{marginLeft:'25px'}}></input>
                <br></br>
                <br></br>
                <img src="https://classroomclipart.com/image/static7/preview2/shih-tzu-dog-face-black-outline-illustration-60194.jpg" style={{float:'right',marginRight:'0px',marginTop:'-200px',display:'inline-block',width:'400px',height:'auto'}}></img>
                <lable className="inputelements" >Description</lable>
                <input type='text' className='inputfields'style={{marginLeft:'40px'}}></input>
                <br></br>
                <br></br>
                <label className='inputelements'>Photos</label>
                <input type="file" id="img" className='file' name="img" accept="image/*" style={{marginLeft:'85px'}}></input>
                <br></br>
                <br></br><br></br>
                <button className='postbtn'>Post For Adoption</button>
            </form>
        </div>
    );
}
export default Postadop;*/

import React, { useState } from 'react';
import './Postadop.css';
import { Link } from 'react-router-dom';

function Postadop() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [des, setDes] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [logo, setLogo] = useState(null); // State to hold the selected image file


    /*const handleFileChange = (e) => {
        setImage(e.target.files[0]);
      };*/
    const handlePostPet = async () => {
        // Example of posting pet data to your backend API
        const response = await fetch('http://localhost:5000/api/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                type,
                age,
                gender,
                description: des,
                logo,
            }),
        });

        if (response.ok) {
            // If posting was successful, set redirectToHome to true
            setRedirectToHome(true);
        } else {
            // Handle error scenarios if needed
            console.error('Failed to post pet');
        }
    };

    // Redirect to home page if redirectToHome is true
    if (redirectToHome) {
        return <Link to='/'>Redirecting...</Link>;
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogo(reader.result);
        };
        reader.readAsDataURL(file);
      };
    return (
        <div className='main' style={{height:'1000px'}}>
            <div className='search bar' style={{backgroundColor:'white'}}>
                <h1 style={{ color: 'orange', display: 'inline-block', marginLeft: '10px', fontFamily: 'cursive' }}>Paws4U</h1>
                <button className='categoriesbtn' style={{ marginRight: '2px', marginLeft: '35px', backgroundColor: 'white', border: 'none', height: '30px' }}>=</button>
                <h3 style={{ display: 'inline-block', color:'orange' }}>Categories</h3>
                <input type="text" className='search' placeholder='🔍Search for anything' style={{ borderRadius: '20px', width: '750px', marginRight: '10px', height: '50px', marginLeft: '20px', fontSize: '15px' }}></input>
                <Link to='/Login'><h3 className='btf1'>Login</h3></Link>
                <Link to='/Profile'><h4 className='btf'>Profile👤</h4></Link>
                <Link to='/'><h4 className='btf'>home🏠</h4></Link>
                <br></br>
                <br></br>
                <Link to='/Postadop'><button className="btn1" >Post for Adoption  </button></Link>
                <Link to='/Search'><button className='btn'>Available Pets</button></Link>
                <button className='btn'>Favorites</button>
                <Link to='/SignIn'><button className='btn'>Register</button></Link>
                <br></br>
                <hr />
            </div>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <h1 style={{ color: 'orange', textAlign: 'center' }}>Rehome A Pet</h1>
            <br></br>
            <h3 style={{ color: 'orange', marginLeft: '100px' }}>Pet Details</h3>
            <form className='formbox' style={{ padding: '90px', margin: '100px', marginTop: '0px', backgroundColor: 'white' }}>
                <label className="inputelements">Pet's Name</label>
                <input type='text' className='inputfields' value={name} onChange={(e) => setName(e.target.value)}></input>
                <br></br>
                <br></br>
                <label className="inputelements">Pet Breed</label>
                <input type='text' className='inputfields' style={{ marginLeft: '58px' }} value={type} onChange={(e) => setType(e.target.value)}></input>
                <br></br>
                <br></br>
                <label className="inputelements">Pet's Age</label>
                <input type='text' className='inputfields' style={{ marginLeft: '60px' }} value={age} onChange={(e) => setAge(e.target.value)}></input>
                <br></br>
                <br></br>
                <label className="inputelements">Pet's Gender</label>
                <input type='text' className='inputfields' style={{ marginLeft: '25px' }} value={gender} onChange={(e) => setGender(e.target.value)}></input>
                <br></br>
                <br></br>
                <img src="https://classroomclipart.com/image/static7/preview2/shih-tzu-dog-face-black-outline-illustration-60194.jpg" style={{float:'right',marginRight:'0px',marginTop:'-200px',display:'inline-block',width:'400px',height:'auto'}}></img>
                <label className="inputelements">Description</label>
                <input type='text' className='inputfields' style={{ marginLeft: '40px' }} value={des} onChange={(e) => setDes(e.target.value)}></input>
                <br></br>
                <br></br>
                <label className='inputelements'>Photos</label>
                <input type="file" id="img" className='file' name="img" accept="image/*" style={{ marginLeft: '85px' }} onChange={handleFileChange}></input>
                <br></br>
                <br></br><br></br>
                <button className='postbtn' onClick={handlePostPet}>Post For Adoption</button>
            </form>
        </div>
    );
}

export default Postadop;







