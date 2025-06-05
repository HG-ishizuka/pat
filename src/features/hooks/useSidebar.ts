import { useState } from 'react';

export const useSidebar = () => {
    const [openState, setOpenState] = useState<Set<number>>(new Set());

    const toggleGroup = (index: number) => {
        setOpenState(prev => {
            const newState = new Set(prev);
            newState.has(index) ? newState.delete(index) : newState.add(index);
            return newState;
        });
    };

    return {openState, toggleGroup};
};