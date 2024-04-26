import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PetPass from '../pages/Petpass';


const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                
              <Route path="/landings/petpass" element={<PetPass />} />

            </Routes>
        </Router>
    );
};

export default RouterComponent;
