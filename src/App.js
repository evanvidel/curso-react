import './App.css';
import AnotherComponet from './components/AnotherComponent';
import Container from './components/Container';
import FirstComponent from './components/FirstComponet';
import Fragment from './components/Fragment';
import Hooks from './components/Hooks';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';


function App() {
  return (
    <div className="App">
      <h2>React</h2>
      <FirstComponent/>
      <AnotherComponet/>
      <Images/>
      <Hooks/>
      <List/>
      <RenderCond x={8} y={10}/>
      <Fragment/>
      <Container>
        <h1>Este é filho container</h1>
      </Container>
    </div>
    
  
  );
}

export default App;
