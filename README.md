# Hardhat Starter Pack

Hardhat Starter Pack is a Hardhat deployment stack for Harmony featuring:

- `hardhat-deploy` for smart contract deployments
- `solidity-coverage` for smart contract code coverage analysis
- `hardhat-typechain` for smart contract static typing
- `mocha` for testing
- `eslint` for linting
- `prettier` for code formatting

The starter pack is preconfigured to deploy to Harmony's `localnet`, `testnet` and `mainnet` networks.

## Installation

```
git clone https://github.com/harmony-one/hardhat-starter-pack.git
cd hardhat-starter-pack
yarn install
```

Modify .env and replace "`ENTER_PRIVATE_KEY_HERE`" for each network with the respective private key you want to use when deploying contracts.

## Usage

### Compilation

```
yarn compile
```

### Coverage

```
yarn coverage
```

### Deployment

#### Hardhat

Terminal window #1:

```
yarn hardhat node
```

Terminal window #2:

```
yarn void:deploy
```

#### Harmony Localnet

Deploying to localnet requires that you have a Harmony node running at `http://localhost:9500`.

```
yarn localnet:deploy
```

#### Harmony Testnet

```
yarn testnet:deploy
```

#### Harmony Mainnet

```
yarn mainnet:deploy
```

### Clean slate

The starter pack includes a `TestToken.sol` contract that is used as an example for deployments and tests.

When you've verified that deployments work using the `TestToken.sol` contract you can remove it, its deployment steps and tests by running:

```
./clean.sh && rm -rf clean.sh
```

You should now have a clean slate for you to use for your projects.

## Attribution

This starter pack was largely inspired by [Ronan Sandford](https://twitter.com/wighawag)'s [hardhat-deploy-ts-test](https://github.com/wighawag/hardhat-deploy-ts-test).
