import { useState } from 'react';

const useToggle = ( initialState, secondState ) => {
    const [toggle, setToggle] = useState(initialState);

    function toggleState() {
        toggle === initialState    
            ? setToggle(secondState)
            : setToggle(initialState);
    }

    return [toggle, toggleState];
}

export default useToggle;