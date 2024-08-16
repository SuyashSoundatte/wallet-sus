import React from 'react';
import MnemonicGenerator from './components/MnemonicGenerator';
import SolanaWallet from './components/SolanaWallet';
import ETHWallet from './components/ETHWallet';

const App = () => {
    return (
        <div>
            <h1>Wallet Kosh</h1>
            <MnemonicGenerator />
            <SolanaWallet />
            <ETHWallet />
        </div>
    );
};

export default App;
