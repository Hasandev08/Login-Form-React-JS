import React, { useState } from 'react';

function Form() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [entry, setEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { email: email, password: password };
        setEntry([...entry, newEntry]);
    }

    return (
        <form action="" onSubmit={submitForm}>
            <div className="form-inner">
                <h2>Login Form</h2>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default Form;