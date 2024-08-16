import React, { useState } from 'react';
import { useSolanaBalance } from '../hooks/useSolanaBalance';

const SolanaWallet = () => {
    const [publicKey, setPublicKey] = useState('');
    const solBalance = useSolanaBalance(publicKey);

    return (
        <div>
            <h2>Solana Wallet</h2>
            <input
                type="text"
                value={publicKey}
                onChange={(e) => setPublicKey(e.target.value)}
                placeholder="Enter Solana public key"
            />
            <p>Balance: {solBalance} SOL</p>
        </div>
    );
};

export default SolanaWallet;
