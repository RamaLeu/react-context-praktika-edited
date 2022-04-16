import './App.css';
import Navigation from './components/Navigation';
import { Section } from './components/Section';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Switch } from "react-router-dom";
import { createContext, useState } from 'react';

export const gLikesContext = createContext();

function App() {
  let [likes ,setLikes] = useState(0)

  return (
    <div>
      <Navigation />
      <gLikesContext.Provider value={{likes, setLikes}}>
      <Section />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      </gLikesContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

