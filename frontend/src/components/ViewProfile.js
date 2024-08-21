// ViewProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SemiCircleProgress from 'semi-circle-progress-bar'; // Assume you have installed this component

const ViewProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
        setUserData(response.data);
      } catch (err) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      
      <div className="mb-6 flex items-center">
        <img src={userData.picture} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Patient ID:</strong> {userData.patientId}</p>
        </div>
      </div>

      <section className="mb-6 p-4 border border-gray-200 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Medical Details</h2>
        <p><strong>Affected Side:</strong> {userData.affectedSide}</p>
        <p><strong>Condition:</strong> {userData.condition}</p>
        <p><strong>Speciality:</strong> {userData.speciality}</p>
        <p><strong>Medical History:</strong> {userData.medicalHistory}</p>
      </section>

      <section className="p-4 border border-gray-200 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Goal Progress</h2>
        <SemiCircleProgress 
          percentage={userData.goalReached}
          progressColor="green"
          progressWidth={10}
          circleRadius={100}
        />
        <p className="text-center mt-2">{userData.goalReached}% completed</p>
      </section>
    </div>
  );
};

export default ViewProfile;