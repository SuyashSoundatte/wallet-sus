import { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

export const useSolanaBalance = (publicKey) => {
    const [solBalance, setSolBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            if (!publicKey) return;
            const connection = new Connection('https://api.mainnet-beta.solana.com');
            const balance = await connection.getBalance(new PublicKey(publicKey));
            setSolBalance(balance / 1e9); // Convert lamports to SOL
        };
        fetchBalance();
    }, [publicKey]);

    return solBalance;
};
