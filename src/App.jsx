import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Web3 from 'web3';
import './App.css'

function App() {
  const [contract, setContract] = useState(null);
  const connectMetamask =async () => {
    console.log('connectMetamask');
    let account;
    if(window.ethereum!="undefined"){
      console.log("MetaMask is installed");
      const accounts=await ethereum.request({method:"eth_requestAccounts"});
      account=accounts[0];
      document.getElementById("accountArea").innerHTML=account;
    }
  }
  const connectContract =async  () => {
    console.log('connectContract');
    const ABI=[
      {
        "inputs": [],
        "name": "remix",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];
    const Address="0xDE36A3FE05d4eB55998F12EA2Dbbd06E9AE3e286";
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    window.contract=new window.web3.eth.contract(ABI, Address);
    await window.contract.methods.remix().call(option,function(error,result){
      if (! error)
          console.log(expand(result));
      else
          console.log(error);
  });
    // console.log("contract connected",cont);
    // await cont.methods.welcome().call();
    // setContract(cont);
    // console.log("contract connected",cont);
  }
  const readContract =async () => {
  const result=await contract.methods.remix().call();
  console.log('readContract',result);
  }
  return (
    <div className="App">
      <div>
        <h1>
          Hello world!
        </h1>
        <p id="accountArea"></p>
        <button onClick={connectMetamask}>connect to metamask</button>
        <button onClick={connectContract}>connect to contract</button>
        <button onClick={readContract}>get data from contract</button>
      </div>
    </div>
  )
}

export default App;
