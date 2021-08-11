import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    let history = useHistory()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    const {name, username, email,phone,website} = user ;
    const onInputChange =(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
        // console.log(user)
    }

    const onSubmit =async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:3001/users',user)
        history.push('/')
    }

    return (
        <div className='container'>
            <form onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Name" 
                    name='name'
                    value={name} 
                    onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Username" 
                    name='username'
                    value={username} 
                    onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    name='email'
                    value={email}
                    onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Phone" 
                    name='phone'
                    value={phone} 
                    onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Website</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Website" 
                    name='website'
                    value={website} 
                    onChange={(e)=> onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
         </div>

    )
}

export default AddUser;