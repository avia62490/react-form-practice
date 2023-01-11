import React from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = React.useState(
        {email: "",
        password: "",
        passwordConfirmation: "",
        joinNewsletter: false,
        employment: "",
        favColor: ""
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
        formData.joinNewsletter && formData.password === formData.passwordConfirmation ? 
            console.log("Thanks for joining our newsletter") : 
            console.log();
        console.log(`Your favorite color is ${formData.favColor}!`)
    };
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
            {/* email/password inputs */}
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
            {/* checkbox */}
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
            {/* employment status radio options */}
                <fieldset> 
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                </fieldset>
            {/* favorite color selector */}
                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor"
                    name="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                >
                    <option value="">Choose a color</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            {/* submit button (handleSubmit function declared at top of form) */}
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
