import './App.css';
import Button from './components/Button';

function App() {

  return (
    <div className="App">
     <Button bg="filled">Primary Button</Button>
     <Button defaultBtn={true}>Default Button</Button>
     <Button dashedbtn={true}>Dashed Button</Button>
     <Button textBtn={true}>Text Button</Button>
     <Button linkBtn={true}>Link Button</Button>
     
    </div>
  );
}

export default App;
