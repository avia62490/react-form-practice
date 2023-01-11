import React from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = React.useState(
        {email: "",
        password: "",
        passwordConfirmation: "",
        joinNewsletter: false
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target
            setFormData(prevFormData => {
                return {
                  ...prevFormData,
                  [name] : type === "checkbox" ? checked : value
                }
            }
        );
    };
    console.log(formData)

    function handleSubmit(event) {
        event.preventDefault()
        formData.password === formData.passwordConfirmation ? 
            console.log("Successfully signed up") :
            console.log("Passwords do not match");
        formData.joinNewsletter ? 
            console.log("Thanks for joining our newsletter") : 
            console.log();
    };
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinNewsletter"
                        value={formData.joinNewsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default App;
