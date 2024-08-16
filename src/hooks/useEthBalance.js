import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const useEthBalance = (address) => {
    const [ethBalance, setEthBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            if (!address) return;
            const provider = new ethers.providers.InfuraProvider('mainnet', 'c7b5784600664fa8af1746347e58e52e');
            const balance = await provider.getBalance(address);
            setEthBalance(ethers.utils.formatEther(balance));
        };
        fetchBalance();
    }, [address]);

    return ethBalance;
};
