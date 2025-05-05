import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formTouched, setFormTouched] = useState({});
  
  const nameInputRef = useRef(null);
  const formRef = useRef(null);
  
  // Focus name input on component mount
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);
  
  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    
    return errors;
  };
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Mark field as touched
    setFormTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate field if it's been touched
    if (formTouched[name]) {
      const fieldErrors = validateForm();
      setFormErrors(prev => ({
        ...prev,
        [name]: fieldErrors[name]
      }));
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = validateForm();
    setFormErrors(errors);
    
    // Mark all fields as touched
    const touchedFields = {};
    Object.keys(formData).forEach(key => {
      touchedFields[key] = true;
    });
    setFormTouched(touchedFields);
    
    // If no errors, submit form
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setFormTouched({});
        
        // Reset form submission status after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }, 1500);
    } else {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
    }
  };
  
  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setFormErrors({});
    setFormTouched({});
    
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };
  
  // Animated typing effect for the contact heading
  const [typedText, setTypedText] = useState('');
  const fullText = "Let's Connect!";
  const typingSpeed = 100;
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  
  return (
    <section className="contact-section">
      <nav className="navbar">
        <div className="nav-brand">Ella Mae Sarausos</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <div className="contact-container">
        <h1 className="section-title typing-effect">{typedText}<span className="cursor">|</span></h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:ella.sarausos@gmail.com">ella.sarausos@gmail.com</a></p>
            </div>
            
            <div className="contact-item">
              <h3>Phone</h3>
              <p><a href="tel:+639123456789">+63 912 345 6789</a></p>
            </div>
            
            <div className="contact-item">
              <h3>Location</h3>
              <p>Zamboanga City, Philippines</p>
            </div>
            
            <div className="contact-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon facebook"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://github.com/ellaaa14" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon github"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon linkedin"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Me a Message</h2>
            
            {formSubmitted && (
              <div className="form-success-message">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}
            
            <form 
              ref={formRef} 
              className={`contact-form ${isSubmitting ? 'submitting' : ''}`} 
              onSubmit={handleSubmit} 
              noValidate
            >
              <div className={`form-group ${formErrors.name ? 'error' : ''}`}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => setFormTouched(prev => ({ ...prev, name: true }))}
                  disabled={isSubmitting}
                  placeholder="Your name"
                />
                {formTouched.name && formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>
              
              <div className={`form-group ${formErrors.email ? 'error' : ''}`}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => setFormTouched(prev => ({ ...prev, email: true }))}
                  disabled={isSubmitting}
                  placeholder="Your email address"
                />
                {formTouched.email && formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>
              
              <div className={`form-group ${formErrors.subject ? 'error' : ''}`}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={() => setFormTouched(prev => ({ ...prev, subject: true }))}
                  disabled={isSubmitting}
                  placeholder="Message subject"
                />
                {formTouched.subject && formErrors.subject && (
                  <span className="error-message">{formErrors.subject}</span>
                )}
              </div>
              
              <div className={`form-group ${formErrors.message ? 'error' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => setFormTouched(prev => ({ ...prev, message: true }))}
                  disabled={isSubmitting}
                  placeholder="Your message"
                ></textarea>
                {formTouched.message && formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
              </div>
              
              <div className="form-buttons">
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
