import React from "react";

export const AboutLazy = React.lazy(() => new Promise(resolve =>{
    // @ts-ignore
    setTimeout(() => resolve(import('./About')), 1500)
}))
