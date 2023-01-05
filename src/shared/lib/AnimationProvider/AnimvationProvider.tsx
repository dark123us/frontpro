import {
    createContext, ReactNode, useRef, useState,
} from 'react';

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
    Gesture?: GestureType
    Spring?: SpringType
    isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextPayload>({});

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    const Spring = useRef<SpringType>();
    const Gesture = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <AnimationContext.Provider>
            {children}
        </AnimationContext.Provider>
    );
};
