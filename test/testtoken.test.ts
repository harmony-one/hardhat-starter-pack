import assert from 'assert';
import {ethers, deployments} from 'hardhat';

describe('TestToken', function () {
  beforeEach(async function () {
    await deployments.fixture();
  });

  it('getting correct greeting', async function () {
    const TestToken = await ethers.getContract('TestToken');
    const totalSupply = await TestToken.callStatic.totalSupply();
    const formattedTotalSupply = ethers.utils.formatEther(totalSupply);
    assert.strictEqual(formattedTotalSupply, '100000000.0');
  });
});
