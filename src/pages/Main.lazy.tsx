import React from "react";

export const MainLazy = React.lazy(() => new Promise(resolve => {
    //@ts-ignore
    setTimeout(() => resolve(import('./Main')), 1500)
}))
