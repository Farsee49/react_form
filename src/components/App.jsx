

import React, { useEffect, useState } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import Forms from './Forms';
import Nav from './Nav';
import Login from './Login';
import Reg from './Reg';



const App = () => {
    const [data, setData] = useState([]);
    

    return (
    <>
        <header>
             <h1>React Forms</h1>
             <Nav />
        </header>
           

            {/* <Forms /> */}
   
   <Routes>
      
            <Route path="/forms"
            element={<Forms data={data} />}/>
            <Route path="/login"
            element={<Login data={data} />}/>
            <Route path="/reg"
            element={<Reg data={data} setData={setData} />}/>
       
    </Routes>
  </>  );
};

export default App;