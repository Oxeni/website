'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <p>Something went wrong!</p>
            <pre>
                {JSON.stringify(error, null, 4)}
            </pre>
            <button onClick={() => reset()}>Reset error boundary</button>
        </div>
    );
}