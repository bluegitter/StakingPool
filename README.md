# StakingPool

### Install Ganache On Click BlockChain

download from https://trufflesuite.com/ganache/, and create test network.

modify truffle-config.js
```
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
```


### Install nodejs requirements 
```
npm install -g truffle 
npm install
```

### Compile Contrace
```
truffle compile
```

### Deploy stETH Contract
at https://github.com/bluegitter/stETH-Contract, execute command to deploy stETH contract, get stETH token contract address, then modify  rewardsToken and stakingToken as stETH address in migrations/2_deploy_contracts.js.

```
    const rewardsToken = '0x7f89bC9302A5B04859102BFe5A39ec7e600F12Bf'; // 提供奖励代币合约地址
    const stakingToken = '0x7f89bC9302A5B04859102BFe5A39ec7e600F12Bf'; // 提供质押代币合约地址
```


### Deploy Contract
```
truffle migrate --reset --network development
```

## Test
```
truffle test

  Contract: StakingPool
totalSupply : 1000000000000000000000000
staked amount for userA, 20
    ✔ should allow users to stake and withdraw stETH correctly (1254ms)


  1 passing (1s)
```
