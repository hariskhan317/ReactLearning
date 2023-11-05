import { useState } from 'react';

export const useToggle = ((initial = false) => {
    const [state, setState] = useState(initial);

    const toggle = () => {
        setState((event) => !event)
    }

    return [state, toggle]
})