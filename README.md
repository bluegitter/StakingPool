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
npm install
```

### Compile Contrace
```
truffle compile
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
