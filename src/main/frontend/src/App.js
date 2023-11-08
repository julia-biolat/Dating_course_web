import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    // 백엔드에서 가져온 데이터를 저장할 상태
    const [hello, setHello] = useState('');
    // 현재 로그인한 사용자가 있는지를 나타내는 상태 (예시로 true로 설정)
    const [currentUser, setCurrentUser] = useState(false);

    // 컴포넌트가 마운트될 때 백엔드에서 데이터를 가져옴
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error));
    }, []);


    return (
        <Router>
            <Topbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/posts" element={<Homepage />} />
                <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
                <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
                <Route path="/post/:id" element={<Single />} />
                <Route path="/write" element={currentUser ? <Write /> : <Login />} />
                <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
            </Routes>
        </Router>
    );
}

export default App;
