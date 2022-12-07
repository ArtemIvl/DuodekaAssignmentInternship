import React, {useState, useCallback, useEffect} from 'react'

const initialState = {
    todos: [
        {
            id: null,
            title: null,
            completed: false
        }
    ]
}

export const Context = React.createContext();

const Store = ({children}) => {
    const [state, setState] = useState(initialState);

    const setContext = useCallback(
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
      Context.set = setContext;
    }, [setContext]);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
};

export const useGlobalState = () => React.useContext(Context);

export default Store;