import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFish, faCaravan, faSchool} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <h1 className={"bg-light"}>Dev ops</h1>
      <FontAwesomeIcon icon={faFish} className={"me-2"}/>
      <FontAwesomeIcon icon={faCaravan} className={"me-2"}/>
      <FontAwesomeIcon icon={faSchool} className={"me-2"}/>
    </div>
  );
}

export default App;
