'use client';
import { useState } from "react";
import GoogleSignupButton from './GoogleSignupButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'; // update path if needed
import { useRouter } from 'next/navigation';


export default function SignupForm() {
  const [formData, setformData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.username.trim() || !formData.email.trim() || !formData.password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log('User signed up:', user);

      //redirect to home page 
      router.push('/home');

      //reset the formdata state
      setformData({ username: '', email: '', password: '' });
      
    } catch (error) {
      console.error('Signup error:', error.message);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <input
        type="text"
        name="username"
        placeholder="Full Name"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Sign Up
      </button>
      <GoogleSignupButton />
    </form>
  );
}

