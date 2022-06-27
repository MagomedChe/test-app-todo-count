import Todos from './components/Todos';
import Counter from './components/Counter';
import InputAdd from './components/InputAdd';

function App() {
  return (
    <div className="App">
      <div>
        <InputAdd />
      </div>
      <div>
        <Todos />
        <Counter />
      </div>
    </div>
  );
}

export default App;
