import React, { useState, useEffect } from 'react';
import TopImage from '../TopImage/TopImage';
import './Dashboard.scss';
import { MdNoMeetingRoom } from 'react-icons/md';

function Dashboard() {
    const [userData, setUserData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState({ name: '', email: '', number: '' });

    useEffect(() => {
        // Retrieve user data from local storage
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);

    const handleEdit = () => {
        setEditMode(true);
        setEditedData(userData);
    };

    const handleSave = () => {
        // Save edited data to local storage
        localStorage.setItem('userData', JSON.stringify(editedData));
        setUserData(editedData);
        setEditMode(false); 
    };

    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (

        <div className='dashboard'>
            <TopImage />
            <h2>Dashboard</h2>
            {userData ? (
                <div className='user-info'>
                    {editMode ? (
                        <div className='edit-form'>
                            <label className='name' htmlFor='editName'>Name:</label>
                            <input className='editname' type='text' id='editName' name='name' value={editedData.name} onChange={handleChange} />
                            <label className='name' htmlFor='editEmail'>Email:</label>
                            <input className='editname' type='email' id='editEmail' name='email' value={editedData.email} onChange={handleChange} />
                            <label className='name' htmlFor='editNumber'>Mobile:</label>
                            <input className='editname' type='text' id='editNumber' name='number' value={editedData.number} onChange={handleChange} />
                            <button className='save' onClick={handleSave}>Save</button>
                        </div>
                    ) : (
                        <div className='display-info'>
                            <p>Name: <span>{userData.name}</span></p>
                            <p>Email: <span>{userData.email}</span></p>
                            <p>Mobile: <span>{userData.number}</span></p>
                            <button className='edit' onClick={handleEdit}>Edit</button>
                        </div>
                    )}
                </div>
            ) : (
                <p>No user data found.</p>
            )}
        </div>
    );
}

export default Dashboard;

