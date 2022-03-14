import React from "react";
import {Routes, Route} from "react-router-dom";
import {FaGithub} from 'react-icons/fa'
import AppTask from "./component/AppTask";
import Menu from "./component/Menu";
import Home from "./component/Home";
import { AppProvider } from "./context";

const App = () => {
   
  return (
  <>
   <Menu />
     <AppProvider>
       <Routes>
              <Route exact path="/task" element={<AppTask />} />
              <Route exact path="/" element={<Home />} />
        </Routes>
      </AppProvider>

      <div class="footer">
        <a href='https://github.com/adamayoba' target='_blank' rel="noopener noreferrer"><FaGithub className='github'/></a>
      </div>
	</>
  );
};

export default App;