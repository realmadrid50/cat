import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Web3 from 'web3';

import './presale.css';
import logo from './media/cat.png'
import eth from './media/eth.svg'

function Presale() {
    const [connectedAddress, setConnectedAddress] = useState('');

    const [ethInputValue, setEthInputValue] = useState('');
    const [catbotInputValue, setCatbotInputValue] = useState('');
    const conversionRatio = 188151.13; // Replace this with your desired conversion ratio
  
    const handleEthInputChange = (event) => {
      const ethValue = event.target.value;
      setEthInputValue(ethValue);
  
      // Calculate the equivalent value in CATBOT
      const catbotValue = (parseFloat(ethValue) * conversionRatio).toFixed(2);
      setCatbotInputValue(catbotValue);
    };

    const checkConnection = async () => {
        if (window.ethereum) {
          try {
            // Check the connected network
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            if (chainId === '0x1') {
              // Request the user's permission to connect to their MetaMask wallet
              await window.ethereum.request({ method: 'eth_requestAccounts' });
              // Get the connected wallet address
              const accounts = await window.ethereum.request({ method: 'eth_accounts' });
              if (accounts.length > 0) {
                setConnectedAddress(accounts[0]);
              }
            } else {
              // Switch to the Ethereum Mainnet
              try {
                await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: '0x1' }],
                });
                // Now, the user is on the Ethereum Mainnet, request account access again
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Get the connected wallet address
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                  setConnectedAddress(accounts[0]);
                }
              } catch (error) {
                console.error('Error switching to Ethereum Mainnet:', error.message);
              }
            }
          } catch (error) {
            console.error('Error connecting to MetaMask:', error.message);
          }
        } else {
          alert('Please install MetaMask to connect your wallet.');
        }
      };

    const shortenAddress = (address) => {
        // Show only the first and last 6 characters of the address
        return address.slice(0, 6) + '...' + address.slice(-6);
    };

    useEffect(() => {
        // Check the connection status on component mount
        checkConnection();
    }, []);



    return (
        <div className='wrap'>

            <main>


                <header>
                    <div className='logo-img'>
                        <img src={logo}></img>
                    </div>


                    <div className='cb'>
                        {connectedAddress ? (
                            <button>
                                <h5>{shortenAddress(connectedAddress)}</h5>
                            </button>
                        ) : (
                            <button onClick={checkConnection}>
                                <h5>Connect Wallet</h5>
                            </button>
                        )}
                    </div>


                </header>

                <div className='presale-title'>
                    <h1>CATBOT PRESALE</h1>
                </div>

                <div className='presale'>
                    <div className='mobileonly'></div>
                    <div className='first-pre'>
                        <div className='logo'>

                            <img src={eth} id='eth'></img>
                            <h4>ETH</h4>
                            <FontAwesomeIcon icon={faArrowRight} style={{ color: 'white' }} />
                            <h3>CATBOT</h3>

                        </div>
                        <div className='left-info'>

                            <div className='token'>
                                <p><span className='semi-transparent-white'>Available:</span> 0.0<span className='semi-transparent-white'>/</span>100,000,000</p>
                            </div>
                            <div className='pricing'>
                                <p>1 CATBOT = 0.04 USDC</p>
                            </div>

                        </div>
                    </div>


                    <div className='input'>
                        <div className='eth-input'>
                            <img src={eth} id='eth'></img>
                            <h4>ETH</h4>
                        </div>

                        <div className='balance'>
                            <p>Balance: 0.00</p>
                        </div>
                        <input type='number' value={ethInputValue} placeholder='0'  onChange={handleEthInputChange}>
                        </input>

                    </div>

                    <div className='down'>
                        <FontAwesomeIcon icon={faArrowDown} className="sw" style={{ color: 'white' }} />

                    </div>

                    <div className='second-input'>
                        <div className='eth-input'>
                            <h4>CATBOT</h4>
                        </div>

                        <div className='allocation'>
                            <p>Your alllocation</p>
                        </div>
                        <input type='number' readOnly placeholder='0'  value={catbotInputValue} />

                    </div>

                    <div className='button'>
                        <button>Approve</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Presale;