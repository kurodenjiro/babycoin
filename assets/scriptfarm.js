const babycoinfarmAdd = "0xb385dbeac6b4de91e3bbb1441fd71bc76262f1b5",

    babycoinfarmABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"BuybackMultiplierActive","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxWalletToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"tokens","type":"uint256[]"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"approveMax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoBuybackEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimDividend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearBuybackMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getLastimeClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUnpaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"openPublicTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openWhitelistTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellFeeIncreaseFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setAutoBuybackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"},{"internalType":"uint256","name":"length","type":"uint256"}],"name":"setBuybackMultiplierSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setDistributorSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsDividendExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"holders","type":"address[]"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsFeeExemptMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"holders","type":"address[]"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTxLimitExemptMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_swapAll","type":"bool"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"setTargetToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_DEAD","type":"address"},{"internalType":"bool","name":"triggerBuybackMultiplier","type":"bool"}],"name":"triggerManualBuyback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_swapEnabled","type":"bool"},{"internalType":"bool","name":"_isWhitelist","type":"bool"}],"name":"updateTradingEnable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"whiteListCommunity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

tokenABI = [{
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Approval",
        type: "event"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "approve",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "subtractedValue",
            type: "uint256"
        }],
        name: "decreaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "addedValue",
            type: "uint256"
        }],
        name: "increaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "previousOwner",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "OwnershipTransferred",
        type: "event"
    }, {
        inputs: [{
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "transfer",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "from",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "to",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Transfer",
        type: "event"
    }, {
        inputs: [{
            internalType: "address",
            name: "sender",
            type: "address"
        }, {
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "transferFrom",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            internalType: "address",
            name: "spender",
            type: "address"
        }],
        name: "allowance",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "decimals",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }];
async function connectWallet() {
    if (window.ethereum) {
        if (97 == parseInt(await window.ethereum.chainId)) try {
            document.getElementById("address").innerHTML = (await window.ethereum.request({
                method: "eth_requestAccounts"
            })).toString().slice(0, 10).concat("...")
        } catch (e) {
            console.log(e)
        } else alert("Connect To BSC Testnet")
    } else alert("Non dapp enabled browser detected. You should consider trying MetaMask Extension!")
}

function myDetails() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = babycoinfarmAdd,
        n = babycoinfarmABI,
        a = new ethers.Contract(t, n, e),
        i = new ethers.Contract("0x93CFe1c3fdF394b2EB4D68CCB42b3Ac3b1D86488", tokenABI, e),
        u = new ethers.Contract("0xb385dbeac6b4de91e3bbb1441fd71bc76262f1b5", tokenABI, e);
    (async () => {
        if (window.ethereum && "Connect Wallet" != document.getElementById("address").innerHTML) try {
            var e = (await window.ethereum.request({
                    method: "eth_requestAccounts"
                })).toString(),
                t = await a.getUnpaid() / 1e18;
            document.getElementById("earnings").innerHTML = t, document.getElementById("supply").innerHTML = await a.totalSupply() / 1e9; document.getElementById("last").innerHTML = await a.getlasttimeclaim() ;
            var n = await i.balanceOf("0x93CFe1c3fdF394b2EB4D68CCB42b3Ac3b1D86488"),
                s = await u.balanceOf("0x1133e8805cc43305b7ea6b15bc4bece5a3a95248");
            document.getElementById("babycoinfarmbal").innerHTML = await u.balanceOf(e);
        } catch (e) {
            console.log(e)
        } else document.getElementById("earnings").innerHTML = ".." 
    })()
}

async function withdrawToken() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = babycoinfarmAdd,
        n = babycoinfarmABI;
    if (console.log(document.getElementById("tokenAdd").value), "0xb385dbeac6b4de91e3bbb1441fd71bc76262f1b5" == document.getElementById("tokenAdd").value) return alert("Please Enter a Valid Token Address"), !1;
    var a = new ethers.Contract(t, n, e.getSigner());
    321 == parseInt(await window.ethereum.chainId) && "Connect" != document.getElementById("address").innerHTML ? window.ethereum || window.ethereum.isMetaMask || ethereum && ethereum.isTrust ? await a.FarmedTokenWithdraw(document.getElementById("tokenAdd").value) : alert("Please connect to Metamask/Trustwallet and switch to BSC Network") : alert("Connect To BSC Chain Mainnet")
}


async function withdrawUSDT() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = babycoinfarmAdd,
        n = babycoinfarmABI;
    var a = new ethers.Contract(t, n, e.getSigner());
    321 == parseInt(await window.ethereum.chainId) && "Connect" != document.getElementById("address").innerHTML ? window.ethereum || window.ethereum.isMetaMask || ethereum && ethereum.isTrust ? await a.FarmedTokenWithdraw("0x0039f574ee5cc39bdd162e9a88e3eb1f111baf48") : alert("Please connect to Metamask/Trustwallet and switch to BSC Network") : alert("Connect To BSC Chain Mainnet")
}



async function withdrawKOFFEE() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = babycoinfarmAdd,
        n = babycoinfarmABI,
        a = new ethers.Contract(t, n, e.getSigner());
    321 == parseInt(await window.ethereum.chainId) && "Connect" != document.getElementById("address").innerHTML ? window.ethereum || window.ethereum.isMetaMask || ethereum && ethereum.isTrust ? await a.KOFFEEWithdraw() : alert("Please connect to Metamask/Trustwallet and switch to BSC Network") : alert("Connect To BSC Chain Mainnet")
}

async function withdrawUSDT() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = babycoinfarmAdd,
        n = babycoinfarmABI;
    var a = new ethers.Contract(t, n, e.getSigner());
    321 == parseInt(await window.ethereum.chainId) && "Connect" != document.getElementById("address").innerHTML ? window.ethereum || window.ethereum.isMetaMask || ethereum && ethereum.isTrust ? await a.FarmedTokenWithdraw("0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684") : alert("Please connect to Metamask/Trustwallet and switch to BSC Network") : alert("Connect To BSC Chain Mainnet")
}

async function withdrawBUSD() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = babycoinfarmAdd,
        n = babycoinfarmABI;
    var a = new ethers.Contract(t, n, e.getSigner());
    321 == parseInt(await window.ethereum.chainId) && "Connect" != document.getElementById("address").innerHTML ? window.ethereum || window.ethereum.isMetaMask || ethereum && ethereum.isTrust ? await a.FarmedTokenWithdraw("0xb385dbeac6b4de91e3bbb1441fd71bc76262f1b5") : alert("Please connect to Metamask/Trustwallet and switch to BSC Network") : alert("Connect To BSC Chain Mainnet")
}

async function withdrawBOOST() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = babycoinfarmAdd,
        n = babycoinfarmABI;
    var a = new ethers.Contract(t, n, e.getSigner());
    321 == parseInt(await window.ethereum.chainId) && "Connect" != document.getElementById("address").innerHTML ? window.ethereum || window.ethereum.isMetaMask || ethereum && ethereum.isTrust ? await a.FarmedTokenWithdraw("0xb385dbeac6b4de91e3bbb1441fd71bc76262f1b5") : alert("Please connect to Metamask/Trustwallet and switch to BSC Network") : alert("Connect To BSC Chain Mainnet")
}

async function withdrawMEMEbabycoinfarm() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = babycoinfarmAdd,
        n = babycoinfarmABI;
    var a = new ethers.Contract(t, n, e.getSigner());
    321 == parseInt(await window.ethereum.chainId) && "Connect" != document.getElementById("address").innerHTML ? window.ethereum || window.ethereum.isMetaMask || ethereum && ethereum.isTrust ? await a.FarmedTokenWithdraw("0x6665d66afa48f527d86623723342cfa258cb8666") : alert("Please connect to Metamask/Trustwallet and switch to BSC Network") : alert("Connect To BSC Chain Mainnet")
}