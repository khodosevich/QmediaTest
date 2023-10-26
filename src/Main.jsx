import React from 'react';
import QuizComponent from "./component/QuizComponent";
import Result from "./component/Result";
import {Route, Routes} from "react-router-dom";
import NotFound from "./component/NotFound";

const Main = () => {
    return (
        <div>
            <div style={{maxWidth:"1400px", margin:"0 auto"}}>
                <Routes>
                    <Route path="/" element={ <QuizComponent/>} />
                    <Route path="/result" element={<Result/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </div>
        </div>
    );
};

export default Main;