import React, { useState } from 'react';
import { useEthBalance } from '../hooks/useEthBalance';

const EthWallet = () => {
    const [address, setAddress] = useState('');
    const ethBalance = useEthBalance(address);

    return (
        <div>
            <h2>Ethereum Wallet</h2>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Ethereum address"
            />
            <p>Balance: {ethBalance} ETH</p>
        </div>
    );
};

export default EthWallet;
