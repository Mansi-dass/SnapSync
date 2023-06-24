import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { creatSession } from '../appwrite/util'


function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("")

    const loginuser = async (e) => {
        e.preventDefault()
        const session = await creatSession(user)
        if (session.code === undefined)
            navigate("/dashboard")
        else {
            setError(session.message)
        }
    }

    return (
        <>
            <div className='h-screen w-screen bg-white flex items-center justify-center'>
                <div className='flex flex-col justify-center 2xl:w-3/12 h-3/5 bg-white'>
                    <h1 className='mx-4 text-2xl font-semibold mobiles'>Welcome back!</h1>
                    <p className='mx-4 mb-2 mt-1'>Sign in now and have fun sharing photos with friends!</p>
                    {error && (<p id='alert' className='text-sm mx-4 text-red-500'>{error}</p>)}

                    <div className='flex flex-col'>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Email'
                            autoComplete='email'
                            required
                            className='border-b-2 px-1 py-2 mx-4 mt-4 text-lg focus:outline-0 focus:border-gray-500 text-gray-600'
                            onChange={(e) => {
                                setUser({
                                    ...user,
                                    email: e.target.value
                                })
                            }}
                        />
                        <input
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Password'
                            autoComplete='current-password'
                            required
                            className='border-b-2 px-1 py-2 mx-4 mt-4 text-lg focus:outline-0 focus:border-gray-500 text-gray-600'
                            onChange={(e) => {
                                setUser({
                                    ...user,
                                    password: e.target.value
                                })
                            }}
                        />
                    </div>

                    <div className='flex flex-col my-3'>
                        <button
                            type='submit'
                            className='bg-blue-950 p-3 m-4 rounded-lg text-white font-semibold hover:opacity-90'
                            onClick={loginuser}
                        >Sign In!
                        </button>
                        <button
                            className='border p-3 mx-4  font-semibold rounder-lg'
                        >Sign in with Google</button>
                    </div>
                    <div className='flex justify-center items-center m-3'>
                        <p>Don't have an account?</p>
                        <a href="/signup" className='font-semibold underline ml-1 text-blue-950'>sign up</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;