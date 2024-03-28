import React from "react";



const Login = () => {
    return (
    <body>
         <h1>Login</h1>
        <div>
            <form>
                <label>
                    Email:</label>
                    <input type="email" name="email" />
                
                <label>
                    Password:</label>
                    <input type="password" name="password" />
           
                <button type="submit">Submit</button>
            </form>
        </div>
        
    </body>
    );
}

export default Login;