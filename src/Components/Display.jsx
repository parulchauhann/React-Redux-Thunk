import axios from 'axios'
import React, { useState } from 'react'
import { applyMiddleware, createStore } from 'redux'
import Reducer from '../Redux/Reducer'
import { showError } from '../Redux/Actions'
import { showUser } from '../Redux/Actions'
import { thunk } from 'redux-thunk'

const store = createStore(Reducer, applyMiddleware(thunk))



function Display() {
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(true)

     store.subscribe(() => setData(store.getState().user))

    const fetchData = () => {
        return function () {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((res) => store.dispatch(showUser(res.data)))
                .catch((error) => store.dispatch(showError(error.message)))
        }
    }

    const handleClick = () =>{
        if(flag){
            store.dispatch(fetchData())
            setFlag(false)
        }
        else{
            setFlag(true)
            setData([])
        }
    }

    return (
        <div>
            {data.map((person) => {
                return (
                    <div key={person.id} className="card">
                        <p className="name">{person.name}</p>
                        <p className="mail">{person.email}</p>
                        <hr />
                    </div>

                )
            })}
            <button onClick={()=> {handleClick()}} >Fetch Data</button>

        </div>
    )
}

export default Display