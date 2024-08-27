import { useRef} from 'react';

export function useDebounceFunction(callback: (...args: any[]) => void, delay: number) {

    // ref to setTimeout
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    
    const debouncedCallback = (...args: any[]) => {
        // reset timer ref if it exists
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        // then call the callback function after delay
        timerRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };

    return debouncedCallback;
}