import { NextRouter } from 'next/router';

export const blockClicks = (route: string | undefined,onclick:any, router: NextRouter ) => {
    if (route) {
        return () => router.push(route)
    }
    
    if (!route) {
        return onclick
    }

    return
}