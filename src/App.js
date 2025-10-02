import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    appliance: ''
  });
  const [fullForm, setFullForm] = useState({
    name: '',
    phone: '',
    address: '',
    zip: '',
    appliance: '',
    time: '',
    description: ''
  });

  const submitQuickForm = (e) => {
    e.preventDefault();
    
    if (!quickForm.name || !quickForm.phone) {
      alert('Please fill in name and phone');
      return;
    }
    
    // Create simple form element for submission
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/ezfixable@gmail.com';
    form.method = 'POST';
    form.target = '_blank';
    
    // Add all form data
    const fields = {
      name: quickForm.name,
      phone: quickForm.phone,
      appliance: quickForm.appliance,
      _subject: 'New Quick Service Request - EZFixable',
      _template: 'table',
      _next: 'https://ezfixable.com'
    };
    
    Object.keys(fields).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;

