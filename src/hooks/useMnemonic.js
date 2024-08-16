import { useState } from 'react';
import * as bip39 from 'bip39';

export const useMnemonic = () => {
    const [mnemonic, setMnemonic] = useState('');

    const generateMnemonic = () => {
        const newMnemonic = bip39.generateMnemonic();
        setMnemonic(newMnemonic);
    };

    return { mnemonic, generateMnemonic };
};
