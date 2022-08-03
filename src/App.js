import './App.css';

import bootstrap from 'bootstrap';

import ListItems from './components/ListItems';

function App() {

  return (
    <>
    <div className="container-sm bg-light">
      <div className="row justify-content-center">
        <div className="col text-center">
          <h3>React ToDo List</h3>
        </div>
        <ListItems></ListItems>
      </div>
    </div>
    </>
  );
}

export default App;
