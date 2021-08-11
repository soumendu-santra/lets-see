import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        axios.get('http://localhost:3001/users').then((result)=>{
            setUsers(result.data.reverse())
        }).catch(err=> console.log('err',err))
        
    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home Page</h1>

                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>User Name</th>
                            <th scope='col'>Email</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) =>
                                <tr key={""+index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td >{item.name}</td>
                                    <td >{item.username}</td>
                                    <td >{item.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mr-2'>View</Link>
                                        <Link className='btn btn-outline-primary mr-2' to={`/users/edit/${item.id}`}  >Edit</Link>
                                        <Link className='btn btn-danger mr-2' onClick={()=>deleteUser(item.id)}>Delete</Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;