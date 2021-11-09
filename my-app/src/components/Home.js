import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [user, setUser] = useState([])

    const api = axios.create({
        baseURL: `http://localhost:1337`
    })
    useEffect(() => {
        test();
    }, []);

    async function test() {
        /**
         * GET
         */
        const val = await api.get('/products');
        console.log("Hello", val.data);
        setUser(val.data)
        console.log("user", user)


        /**
         * POST
         */
        const data = {
            name: "again1"
        }
        const response = await api.post('/products', data);
        console.log(response.data);
    }
    return (
        <div>
            {
                user.map(d => {
                    return (
                        <h1>{d.name}</h1>
                    )

                })
            }
        </div>
    )
}
