import { useState } from "react"

export const useCounter = (() => {
    const [state, setState] = useState(0);

    const increment = () => {
        setState((count) => count + 1)
    }

    const decrement = () => {
        setState((count) => count === 0 ? count = 0 : count - 1 )
    }

    const reset = () => {
        setState(0)
    }

    return [state, increment, decrement, reset]
})