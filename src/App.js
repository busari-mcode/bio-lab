import { BrowserRouter as Router, Switch, Route  } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/heading/Header";
import Home from "./components/home/Home";
import Animations from "./components/animations/Animations";
import EquipBook from "./components/equipment-booking/EquipBook";
import Join from "./components/join/Join";
import LabPics from "./components/lab-pictures/LabPics";
import People from "./components/people/People";
import Phys from "./components/phys411/Phys";
import Publications from "./components/publications/Publications";
import Teaching from "./components/teaching/Teaching";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/animations" exact component={Animations} />
          <Route path="/equipbook" exact component={EquipBook} />
          <Route path="/join" exact component={Join} />
          <Route path="/labpics" exact component={LabPics} />
          <Route path="/people" exact component={People} />
          <Route path="/phys" exact component={Phys} />
          <Route path="/publications" exact component={Publications} />
          <Route path="/teaching" exact component={Teaching} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
