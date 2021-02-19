#!/usr/bin/env bash

# Remove contract, deployment files & tests
rm -rf src/TestToken.sol
rm -rf deploy/{000,999}*.ts
rm -rf test/*.test.ts
rm -rf scripts/testtoken.ts

# Remove .git
rm -rf .git
