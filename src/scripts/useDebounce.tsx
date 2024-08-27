import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number): T | undefined {
    const [debounced, setDebounced] = useState<T>(value);

    // update value if value or delay changes
    useEffect(() => {
        console.log('setting debounce with', value);
        const timer = setTimeout(() => {
            setDebounced(value);
        }, delay);

        // clear timeout on cleanup
        return (() => {
            console.log('clearing timer after delay', delay)
            clearTimeout(timer);
        })
    }, [value, delay]);

    // return debounced value after delay
    // (value may be updated within delay)
    return debounced;
}