import './app.css';
import logo from './media/cat.png'
import cat from './media/cute.png'
import paw from './media/raw.png'
import loop from './media/loops.png'
// import cat from './media/c.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useRef, useCallback } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import blill from './media/still.png'
import bright from './media/declined.png'
import bleft from './media/inclined.png'
import wlill from './media/will.png'
import wleft from './media/weclined.png'
import wright from './media/winclined.png'







function App() {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['LayerZero ', 'ZkSync '];
  const [isAnimating, setIsAnimating] = useState(false);


  const faqRef = useRef(null);


  const handleFAQButtonClick = () => {
    faqRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const tokenomics = useRef(null);


  const handletokenomics = () => {
    tokenomics.current.scrollIntoView({ behavior: 'smooth' });
  };

  const Work = useRef(null);

  const handleWork = () => {
    Work.current.scrollIntoView({ behavior: 'smooth' });
  };


  

  const redirectToGitbook = () => {
    window.location.href = 'https://catbotxyz.gitbook.io/catbot/'; // Replace with your desired YouTube link
  };

  const redirectToTelegram = () => {
    window.location.href = 'https://t.me/TheCatBotXYZ'; // Replace with your desired YouTube link
  };

  const redirectToTwitter = () => {
    window.location.href = 'https://twitter.com/TheCatBotXYZ'; // Replace with your desired YouTube link
  };



  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 1500); // Adjust the display duration (in milliseconds)
    }, 4000); // Adjust the interval between word transitions (in milliseconds)

    return () => clearInterval(interval);
  }, []);


  const getAnimationStyle = () => {
    return {
      opacity: isAnimating ? 0 : 1,
      transition: 'opacity 1s ease-in-out',
      color: 'rgb(214, 214, 24)',
    };
  };


  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };


  const [isActive2, setIsActive2] = useState(false);

  const handleClick2 = () => {
    setIsActive2((prevIsActive) => !prevIsActive);
  };


  const [isActive3, setIsActive3] = useState(false);

  const handleClick3 = () => {
    setIsActive3((prevIsActive) => !prevIsActive);
  };


  const [isActive4, setIsActive4] = useState(false);

  const handleClick4 = () => {
    setIsActive4((prevIsActive) => !prevIsActive);
  };

  const [isActive5, setIsActive5] = useState(false);

  const handleClick5 = () => {
    setIsActive5((prevIsActive) => !prevIsActive);
  };

  const [isActive6, setIsActive6] = useState(false);

  const handleClick6 = () => {
    setIsActive6((prevIsActive) => !prevIsActive);
  };

  return (

    <div className='wrap'>

      <main>
        <div className='foug'>

          <div className='bubbles'>
            <img src={blill} style={{ '--i': 11 }}></img>
            <img src={bright} style={{ '--i': 12 }}></img>
            <img src={bleft} style={{ '--i': 24 }}></img>
            <img src={wlill} style={{ '--i': 10 }}></img>
            <img src={wleft} style={{ '--i': 14 }}></img>
            <img src={wright} style={{ '--i': 23 }}></img>
            <img src={blill} style={{ '--i': 18 }}></img>
            <img src={bright} style={{ '--i': 16 }}></img>
            <img src={bleft} style={{ '--i': 19 }}></img>
            <img src={wright} style={{ '--i': 20 }}></img>
            <img src={wlill} style={{ '--i': 22 }}></img>
            <img src={wleft} style={{ '--i': 25 }}></img>
            <img src={wright} style={{ '--i': 18 }}></img>
            <img src={blill} style={{ '--i': 21 }}></img>
            <img src={bright} style={{ '--i': 15 }}></img>
            <img src={wlill} style={{ '--i': 13 }}></img>
            <img src={bleft} style={{ '--i': 26 }}></img>
            <img src={wleft} style={{ '--i': 13 }}></img>
            <img src={wright} style={{ '--i': 27 }}></img>
            <img src={blill} style={{ '--i': 21 }}></img>
            <img src={bright} style={{ '--i': 28 }}></img>
            <img src={bleft} style={{ '--i': 18 }}></img>
            <img src={blill} style={{ '--i': 16 }}></img>
            <img src={wlill} style={{ '--i': 19 }}></img>
            <img src={wright} style={{ '--i': 20 }}></img>
            <img src={wleft} style={{ '--i': 22 }}></img>
            <img src={wlill} style={{ '--i': 25 }}></img>
            <img src={blill} style={{ '--i': 18 }}></img>
            <img src={bleft} style={{ '--i': 21 }}></img>
            <img src={blill} style={{ '--i': 15 }}></img>
            <img src={bleft} style={{ '--i': 13 }}></img>
            <img src={wright} style={{ '--i': 26 }}></img>
            <img src={wleft} style={{ '--i': 13 }}></img>
            <img src={bleft} style={{ '--i': 27 }}></img>
            <img src={wlill} style={{ '--i': 21 }}></img>
            <img src={bright} style={{ '--i': 15 }}></img>
            <img src={wlill} style={{ '--i': 13 }}></img>
            <img src={bleft} style={{ '--i': 26 }}></img>
            <img src={wleft} style={{ '--i': 13 }}></img>
            <img src={wright} style={{ '--i': 27 }}></img>
            <img src={blill} style={{ '--i': 21 }}></img>
            <img src={bright} style={{ '--i': 28 }}></img>
            <img src={bleft} style={{ '--i': 18 }}></img>
            <img src={blill} style={{ '--i': 16 }}></img>
            <img src={wlill} style={{ '--i': 19 }}></img>
            <img src={wright} style={{ '--i': 20 }}></img>
            <img src={wleft} style={{ '--i': 22 }}></img>
            <img src={wlill} style={{ '--i': 25 }}></img>
            <img src={blill} style={{ '--i': 18 }}></img>
            <img src={bleft} style={{ '--i': 21 }}></img>
          </div>

        </div>

        <header>
          <div className='logo-img'>
            <img src={logo}></img>
          </div>
          <div className='pages'>
            <a>Introduction</a>
            <a onClick={handleWork}>How it works</a>
            <a onClick={handletokenomics}>Tokenomics</a>
            <a onClick={handleFAQButtonClick}> FAQ</a>
          </div>

          <div className='cb'>
            <button onClick={redirectToTelegram}>
              <h5>Join Us</h5>
            </button>
          </div>


        </header>

        <div className='blank'></div>

        <div className='glow'>

          <div className='title'>
            <h2> Automate Your </h2>

            <div className='below'>

              <span
                style={getAnimationStyle()}
              >
                {words[currentWordIndex]}
              </span>


              <h2>Airdrop Farming</h2>


            </div>

            <div className='s'>
              <img src={paw}></img>
            </div>
          </div>

          <div className='paragraph'>

            <p>Catbot automates on-chain interactions with just one click, you can create or follow automated tasks, making Airdrop Farming a breeze and saving you days of manual clicking.</p>

          </div>

        </div>
        <div className='docs'>

          <button onClick={redirectToGitbook}>
            CHECK OUR DOCS
          </button>
        </div>



        <div className='cat_robot'>
          <img src={cat}></img>
        </div>

        <div className='bands text'>
          <div className='res'>
            S
          </div>
          <div className='ser'>
            S
          </div>
        </div>

        <div className='how-it-works' ref={Work}>
          <h2>How <span>It Works</span> </h2>
          <p>Type <span className='code-background '>/farm</span> and Catbot will manage everything else. All you have to do now is enjoy farming airdrops on autopilot.</p>
        </div>

        <div className='working'>

          <div className='loop'>
            <img src={loop}></img>
          </div>

          <div className='first-row'>
            <div className='top-card'>

              <div className='step'>
                <h4>1</h4>
              </div>

            </div>

            <div className='text'>
              <h3>Say 👋 to CatBot</h3>
              <p>Type <span>/farm </span>to <span>@CatBotXYZ </span>
                on Telegram</p> 
            </div>

          </div>

          <div className='second-row'>
            <div className='bubble-1'>

              <div className='top-bubble'>

                <div className='step'>
                  <h4>2</h4>
                </div>

              </div>

              <div className='text-bubble'>
                <h3>Top up your wallet</h3>
                <p>Complete onboarding by following the guide.




</p>
              </div>

            </div>

            <div className='bubble-1'>

              <div className='top-bubble'>

                <div className='step'>
                  <h4>3</h4>
                </div>

              </div>

              <div className='text-bubble'>
                <h3>Start Farming</h3>
                <p>Manual or automatic farming.</p>
              </div>

            </div>

          </div>

        </div>

        <div className='scroll text'>
          <div>

            ZkSync  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> ZkSync  - <span> Starknet -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> ZkSync  - <span> Meow -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> ZkSync  - <span> Anti-Sybil -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> ZkSync  - <span> Starknet -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Meow</span> ZkSync  - <span> Telegram Bot -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> kSync  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> ZkSync  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Meow - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> ZkSync  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> ZkSync  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span>             ZkSync  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> ZkSync  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Meow -</span> ZkSync  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> ZkSync  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span> Meow  - <span> LayerZero -  </span> Linea -  <span> Scroll -  </span> ZkSync - <span> CatBot - </span> Base - <span> LayerZero - </span>

            Polygon zkEVM - <span> Taiko - </span> Airdrop - <span> Farming - </span> Catbot - <span>Scroll -</span>
          </div>
        </div>

        <div className='blank-2'></div>
        <div className='tokenomics' ref={tokenomics}>

          <div className='right'>

            <div className='right-area'>

              <div className='subtitle'>
                <h4>Tokenomics</h4>
              </div>

              <div className='token-name'>

                <h2>$CAT TOKEN</h2>

              </div>

              <div className='supply'>
                <h5>Total Supply:</h5>
                <h5>100,000,000 $CATBOT</h5>
              </div>

              <div className='checks'>

                <div className='first-check'>

                  <div className='zonecheck'>

                    <FontAwesomeIcon icon={faCheck} className="white-icon" />

                  </div>

                  <div className='zonetext'>

                    <p><span className='bold-white'>Buy/Sell Tax:</span> <span className='semi-transparent-white'>4% tax applied to each transaction of $CATBOT</span></p>


                  </div>

                </div>
                <div className='first-check'>

                  <div className='zonecheck'>

                    <FontAwesomeIcon icon={faCheck} className="white-icon" />

                  </div>

                  <div className='zonetext'>

                    <p><span className='bold-white'>Redistribution:</span> <span className='semi-transparent-white'>2% for LP, 2% for revenue sharing and 1% for the Team</span></p>


                  </div>

                </div>
                <div className='first-check'>

                  <div className='zonecheck'>

                    <FontAwesomeIcon icon={faCheck} className="white-icon" />

                  </div>

                  <div className='zonetext'>

                    <p><span className='bold-white'>Recap:</span> <span className='semi-transparent-white'>Token is purely a utility token. $CATBOT creates and redistributes pure revenue.</span></p>


                  </div>

                </div>

              </div>

              <div className='double-checks'>



                <div className='double-check'>

                  <div className='zonecheck'>

                    <FontAwesomeIcon icon={faCheck} className="white-icon" />

                  </div>

                  <div className='zonetext'>

                    <p><span className='bold-white'>Presale Date:</span> <span className='check-transparent-white '>TBA</span></p>


                  </div>

                </div>

                <div className='double-check'>

                  <div className='zonecheck'>

                    <FontAwesomeIcon icon={faCheck} className="white-icon" />

                  </div>

                  <div className='zonetext'>

                    <p><span className='bold-white'>Hardcap:</span> <span className='check-transparent-white '>TBA</span></p>


                  </div>

                </div>

              </div>



            </div>

          </div>
          <div className='left'>
            <div className='left-area'>
              <div className='groupe'>

              </div>
              <div className='subtitle'>
                <h4>TOKEN DISTRIBUTION</h4>
              </div>

              <div className='distribution'>
                <div className='number'>
                  <h4>10,000,000</h4>
                </div>
                <div className='members'>

                  <p>Team & Founders (10%)</p>

                </div>
                <div className='loader-wrap'>
                  <div className='loader'>
                    <div className='state'>

                    </div>
                  </div>
                </div>
              </div>

              <div className='distribution'>
                <div className='secours'>
                  <h4>50,000,000</h4>
                </div>
                <div className='members'>
                  <p>Supply Added to Liquidity (50%)</p>
                </div>
                <div className='loader-wrap'>
                  <div className='loader'>
                    <div className='liquidity'>

                    </div>
                  </div>
                </div>
              </div>


              <div className='distribution'>
                <div className='secours'>
                  <h4>40,000,000</h4>
                </div>
                <div className='members'>

                  <p>Presale (40%)</p>

                </div>
                <div className='loader-wrap'>
                  <div className='loader'>
                    <div className='seed'>

                    </div>
                  </div>
                </div>
              </div>

              <div className='vesting'>
                <h4>VESTING</h4>
              </div>

              <div className='vesting-wrap'>
                <div className='vesting-loader'>

                </div>
                <p><span className='small-white'>Team: </span><span className='small-transparent-white'>3 months cliff, linear vesting of 12 months</span></p>
              </div>

              <div className='vesting-wrap'>
                <div className='vesting-loader'>

                </div>
                <p><span className='small-white'>Seed: </span><span className='small-transparent-white'>34% TGE, linear for 1 month</span></p>
              </div>
            </div>
          </div>

        </div>


        <div className='FAQ'  ref={faqRef} id="faq-section">

          <h2>Frequently Asked Questions</h2>
          <p>If you still have questions</p>

        </div>

        <div className={`fak ${isActive ? 'active' : ''}`} onClick={handleClick}>
          <div className='question'>
            <h3>What is CatBot?</h3>
            <svg
              className={`arrow ${isActive ? 'rotate' : ''}`}
              width={'15'}
              height={'10'}
              viewBox='0 0 42 25'
            >
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth={'7'}
                strokeLinecap='round'
              ></path>
            </svg>
          </div>

          <div className={`answer ${isActive ? 'active' : ''}`}>
            <p>
              CatBot is a Telegram bot that will help airdrop farmers automate their airdrop farming strategy through setting up wallets and executing airdrop farming strategies.
            </p>
          </div>
        </div>


        <div className={`fak ${isActive3 ? 'active' : ''}`} onClick={handleClick3}>
          <div className='question'>
            <h3>What is airdrop Tasks & Routes?</h3>
            <svg
              className={`arrow ${isActive3 ? 'rotate' : ''}`}
              width={'15'}
              height={'10'}
              viewBox='0 0 42 25'
            >
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth={'7'}
                strokeLinecap='round'
              ></path>
            </svg>
          </div>

          <div className={`answer ${isActive3 ? 'active' : ''}`}>
            <p>
              Tasks: Onchain interactions picked by LootBot Experts: Bridge, swap, NFT minting, liquid provisions, deploying smart contracts...
              Routes: A combination of scheduled tasks configured with conditions.
            </p>
          </div>
        </div>
        

        <div className={`fak ${isActive2 ? 'active' : ''}`} onClick={handleClick2}>
          <div className='question'>
            <h3>Who defines the airdrop tasks?</h3>
            <svg
              className={`arrow ${isActive2 ? 'rotate' : ''}`}
              width={'15'}
              height={'10'}
              viewBox='0 0 42 25'
            >
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth={'7'}
                strokeLinecap='round'
              ></path>
            </svg>
          </div>

          <div className={`answer ${isActive2 ? 'active' : ''}`}>
            <p>
            Airdrop tasks will be defined by campaigns, and our team will choose which ones the bot can automate.
            </p>
          </div>
        </div>

        <div className={`fak ${isActive4 ? 'active' : ''}`} onClick={handleClick4}>
          <div className='question'>
            <h3>Is there a minimum amount that must be in the wallet?</h3>
            <svg
              className={`arrow ${isActive4 ? 'rotate' : ''}`}
              width={'15'}
              height={'10'}
              viewBox='0 0 42 25'
            >
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth={'7'}
                strokeLinecap='round'
              ></path>
            </svg>
          </div>

          <div className={`answer ${isActive4 ? 'active' : ''}`}>
            <p>
              In order for the script to be executed to the end, the amount in the wallet must not be less than the amount that will be shown when you set up the script.
            </p>
          </div>
        </div>

        <div className={`fak ${isActive5 ? 'active' : ''}`} onClick={handleClick5}>
          <div className='question'>
            <h3>Can I become sybil due to the bot activity?</h3>
            <svg
              className={`arrow ${isActive5 ? 'rotate' : ''}`}
              width={'15'}
              height={'10'}
              viewBox='0 0 42 25'
            >
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth={'7'}
                strokeLinecap='round'
              ></path>
            </svg>
          </div>

          <div className={`answer ${isActive5 ? 'active' : ''}`}>
            <p>
            On our part system completely randomizes the actions taken by your wallets to eliminate any potential identification them as Sybil.            </p>
          </div>
        </div>


        <div className={`fak ${isActive6 ? 'active' : ''}`} onClick={handleClick6}>
          <div className='question'>
            <h3>Will you support other airdrops later?</h3>
            <svg
              className={`arrow ${isActive6 ? 'rotate' : ''}`}
              width={'15'}
              height={'10'}
              viewBox='0 0 42 25'
            >
              <path
                d='M3 3L21 21L39 3'
                stroke='white'
                strokeWidth={'7'}
                strokeLinecap='round'
              ></path>
            </svg>
          </div>

          <div className={`answer ${isActive6 ? 'active' : ''}`}>
            <p>
            Yes, if you want to automate any airdrop that we don't have, contact us on Twitter.



            </p>
          </div>
        </div>


        <div className='socials'>

          <div className='socials-img'>
            <FontAwesomeIcon icon={faPaperPlane} onClick={redirectToTelegram} className="my-icon" />

            {/* Twitter icon from the Brands library */}
            <FontAwesomeIcon icon={faTwitter} onClick={redirectToTwitter} className="twitter-icon" />

          </div>

          <p>CatBot
            2023 ©
            -
            All Rights Reserved.</p>

        </div>


      </main>
    </div>


  );
}

export default App;
