import './App.css';

import bootstrap from 'bootstrap';

import ListItems from './components/ListItems';

import { DataProvider } from './components/Context';

function App() {

  return (
    <>
      <DataProvider>
        <div className="container-sm bg-light">
          <div className="row justify-content-center">
            <div className="col text-center">
              <h3>React ToDo List</h3>
            </div>
            <ListItems></ListItems>
          </div>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
