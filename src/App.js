import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import TodoList from './components/TodoList';

const initialGlobalState = {
  todos: [{
    id: null, title: null, competed: false
  }],
  count: 1
};

// Create a Context for the (global) State
const GlobalState = React.createContext(initialGlobalState);

const useGlobalState = () => React.useContext(GlobalState);

const GlobalStateProvider = function ({ children }) {
  const [state, setState] = useState(initialGlobalState ?? {});

  const setGlobalState = useCallback(
    (data = {}) => {
      const newState = { ...state };

      // Loop over the data items by key, only updating those which have changed
      Object.keys(data).forEach((key) => {
        newState[key] = data[key];
      });

      // Update the state with the new State
      setState(newState);
    },
    [state, setState]
  );

  useEffect(() => {
    GlobalState.set = setGlobalState;
  }, [setGlobalState]);

  return (
    // Pass the current value of GlobalState, based on this components' State, down
    <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
  );
};

// Create a shorthand Hook for using the GlobalState
window.GlobalState = GlobalState;

function App() {
  return (
    <GlobalStateProvider>
    <div className="todo-app">
      <TodoList />
    </div>
    </GlobalStateProvider>
  );
}

export default App;

