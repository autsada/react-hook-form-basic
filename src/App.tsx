import React from 'react'
import { useForm } from 'react-hook-form'

import './App.css'

function App() {
  const { register, errors, handleSubmit } = useForm<{
    username: string
    email: string
    password: string
  }>()

  const submit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='App'>
      <form
        onSubmit={submit}
        style={{
          textAlign: 'left',
          width: '20%',
          margin: '0 auto',
        }}
      >
        <div style={{ margin: '12px 0' }}>
          <label htmlFor='Username'>Username</label>
          <div>
            <input
              type='text'
              placeholder='Username'
              name='username'
              ref={register({
                required: 'Username is required.',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters.',
                },
              })}
            />
          </div>
          {errors.username && (
            <p style={{ color: 'red', margin: '0', fontSize: '10px' }}>
              {errors.username.message}
            </p>
          )}
        </div>

        <div style={{ margin: '12px 0' }}>
          <label htmlFor='Email'>Email</label>
          <div>
            <input
              type='text'
              placeholder='Email'
              name='email'
              ref={register({
                required: 'Email is required.',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is incorrect',
                },
              })}
            />
          </div>
          {errors.email && (
            <p style={{ color: 'red', margin: '0', fontSize: '10px' }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div style={{ margin: '12px 0' }}>
          <label htmlFor='Password'>Password</label>
          <div>
            <input
              type='password'
              placeholder='Password'
              name='password'
              ref={register({
                required: 'Password is required.',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters.',
                },
                validate: (value: string) => {
                  const isValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  )

                  if (!isValid)
                    return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special symbol.'
                  else return true
                },
              })}
            />
          </div>
          {errors.password && (
            <p style={{ color: 'red', margin: '0', fontSize: '10px' }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <input type='submit' />
      </form>
    </div>
  )
}

export default App
