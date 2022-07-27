import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Ourservices from "./pages/Ourservices/Ourservices";

function App() {
  return (
    <div className="App">
        <Navbar />  
         <main>
        <Switch>
         
           <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/services" exact component={Ourservices} />
          
          
        </Switch>
      </main>  
       <Footer />    
      
    </div>
  );
}

export default App;
