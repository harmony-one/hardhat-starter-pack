import assert from 'assert';
import {ethers} from 'hardhat';
import {Signer} from 'ethers';

describe('Accounts', function () {
  let accounts: Signer[];

  beforeEach(async function () {
    accounts = await ethers.getSigners();
  });

  it('should do something right', async function () {
    assert(accounts.length > 0);
  });
});
