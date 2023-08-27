import React, { lazy, Suspense, } from "react";
import {
BrowserRouter as Router, Route, Routes, Navigate
} from 'react-router-dom';
import FirstPage from '../pages/firstpage/firstpage';
import Index from '../pages/index/index';
const routes:React.FC<any> = () => {
    return (
        <Router>
            <Suspense>
                <Routes>
                    <Route path=''  Component={FirstPage}>
                        <Route path='index'  Component={Index}></Route>
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
};

export default routes;