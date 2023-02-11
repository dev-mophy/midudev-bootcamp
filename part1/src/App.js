import './App.css';
import Mensaje from './Mensaje';

const Descripcion = () => {
  return <p>
    Esta es la app del curso fullstack bootcamp
  </p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color="Red" message= "Estamos trabajando"/>
      <Mensaje color="green" message= "En un curso"/>
      <Mensaje color="yellow" message= "De react"/>
      <Descripcion/>
    </div>
  );
}

export default App;
