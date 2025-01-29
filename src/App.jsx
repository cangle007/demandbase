import { Provider } from 'react-redux';
import { setupStore } from './setupStore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import TasksList from './TasksList';
import TaskCreator from './TaskCreator';

const history = createBrowserHistory();

const store = setupStore(); // Initialize the store

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router history={history}>
          <Routes>
            <Route exact path='/' element={<TaskCreator />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
