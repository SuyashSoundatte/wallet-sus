import React from 'react';
import { useMnemonic } from '../hooks/useMnemonic';

const MnemonicGenerator = () => {
    const { mnemonic, generateMnemonic } = useMnemonic();

    return (
        <div>
            <button onClick={generateMnemonic}>Generate Mnemonic</button>
            <input type="text" value={mnemonic} readOnly />
        </div>
    );
};

export default MnemonicGenerator;
