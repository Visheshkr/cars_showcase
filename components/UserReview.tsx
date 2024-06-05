"use client";

import React, { useState } from 'react';

const UserReview: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [model, setModel] = useState('');
  const [desc, setDesc] = useState('');
  const [rating, setRating] = useState<number | string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const review = {
      name,
      company,
      model,
      desc,
      rating: Number(rating),
    };

    let result = await fetch("http://localhost:3000/api/auth",{
        method:"POST",
        body:JSON.stringify({name,company,model,desc,rating})
    });
    result = await result.json();
    if(result.success){
        alert("Review added Successfully!");
    }
    else{
        alert("Some Error Occured!");
    }
    setName('');
    setCompany('');
    setModel('');
    setDesc('');
    setRating('');
   
  };

  const formStyle: React.CSSProperties = {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const formGroupStyle: React.CSSProperties = {
    marginBottom: '15px',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle: React.CSSProperties = {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    outline: 'none',
  };

  const textareaStyle: React.CSSProperties = {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    outline: 'none',
    resize: 'vertical',
  };

  const submitButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const submitButtonHoverStyle: React.CSSProperties = {
    backgroundColor: '#0056b3',
  };
  const heading: React.CSSProperties = {
    color: '#777',
    fontSize:"30px",
    textAlign:"center",
    margin:"40px 0"

  };
  const subHeading: React.CSSProperties = {
    fontSize:"20px",
    textAlign:"center",
    margin:"20px 0"

  };

  return (
    <div>
        <h1 style={heading}>
            User Reviews
        </h1>
        <p style={subHeading}>Add your review here</p>
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          placeholder="Enter your name"
          required
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={inputStyle}
          placeholder="Enter the company's name"
          required
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          style={inputStyle}
          placeholder="Enter the model name"
          required
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="desc">Description:</label>
        <textarea
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={textareaStyle}
          placeholder="Enter a brief description"
          required
        ></textarea>
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="10"
          style={inputStyle}
          placeholder="1-10"
          required
        />
      </div>
      <button
        type="submit"
        style={{
          ...submitButtonStyle,
          ...(submitButtonHoverStyle ? { ':hover': submitButtonHoverStyle } : {}),
        }}
      >Submit Review</button>
    </form>
    </div>
  );
};

export default UserReview;

