import React, {useEffect, useState} from "react";
import './App.scss';
import AdminPage from "./Admin-page/container-admin";
import ShoppingPage from "./Shopping-Page";
import "../src/assets/style/index.scss"
import {useSelector} from "react-redux";

function App() {
    const userToken = useSelector(state => state.Authorization.userToken)
    const [token, setToken] = useState('')
    const [loader, setLoader] = useState(null)
    useEffect(() => {
        setInterval(() => {
            setLoader(false)
            const localToken = localStorage.getItem("userToken")
            setToken(localToken)
            setLoader(true)
        }, 3000)
    }, [])
    return <div className="App">
        {!loader ?
            <div className="loading-container">
                <div className="loader-bg"></div>
                <div className="loader-box">
                    <div className="box">
                        <div className="loader"><span></span></div>
                        <div className="loader"><span></span></div>
                        <div className="load">Loading...</div>
                        <div className="loader"><i></i></div>
                        <div className="loader"><i></i></div>
                    </div>
                </div>

            </div> : null}
        {token ? <AdminPage/> : <ShoppingPage/>}

    </div>
}

export default App;
