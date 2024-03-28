import React from "react";


const Register = () => {
    return (
        <body>
            <h1>Register</h1>
            <div>
                <form>
                    <div>
                    <label>
                        Email:     </label>
                    <input type="email" name="email" />
                 </div>
                    <div>
                    <label>
                        Password:</label>
                    <input type="password" name="password" />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>

        </body>
    );
}

export default Register;