'use client'

import React, { useState, useEffect } from 'react'

interface User {
    _id: string
    username: string
    firstName: string
    lastName: string
    email: string
}

export default function AllUsers() {
    const [users, setUsers] = useState<User[]>([])  //state to store users
    const [message, setMessage] = useState<string | null>(null)  //state for error/success message

    useEffect(() => {
        //fetch all users
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/user/getAll')//api call to get all users
                const data = await response.json()
                //if response is ok, set users state with data
                if (response.ok) {
                    setUsers(data)
                } else {
                    setMessage(data.message || 'Failed to load users')
                }
            } catch (error: any) {
                console.error('Error fetching users:', error)
                setMessage('An error occurred while fetching users')
            }
        }

        fetchUsers()
    }, [])

    return (
        <div>
            <h1>All Users</h1>
            {message && <p>{message}</p>}

            {users.length === 0 ? (//if no users found, display message
                <p>No users found</p>
            ) : (//user found, display users
                <ul>
                    {users.map((user) => (
                        <li key={user._id}>
                            <div>
                                Username: <b>{user.username}</b>
                            </div>
                            <div>
                                First Name: <b>{user.firstName}</b>
                            </div>
                            <div>
                                First Name: <b>{user.lastName}</b>
                            </div>
                            <div>
                                Email: <b>{user.email}</b>
                            </div>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
