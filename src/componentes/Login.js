import React from 'react';

const Login = () => {
    return (

        <div className='cont'>


            <div className='login '>

                <h1>Sign IN</h1>
                <p>Sign in and start managing your candidates!</p>
                <form className='formulario '>
                    <input type='text' placeholder='Login' />
                    <input type='password' placeholder='Password' />
                    <div className="d-flex justify-content-between mb-4">
                        <div className='tamano'>
                            <input type='checkbox' className='checkbox' />
                            <label className='px-2 label'>Remember me</label>
                        </div>
                        <p className='forgortpasword'> Forgot password?</p>
                    </div>
                    <button>Login</button>

                </form>
            </div>


        </div>


    );
}

export default Login;