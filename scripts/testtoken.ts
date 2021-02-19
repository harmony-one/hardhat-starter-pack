import {ethers} from 'hardhat';

async function main() {
  const TestToken = await ethers.getContract('TestToken');
  const totalSupply = await TestToken.callStatic.totalSupply();
  const formattedTotalSupply = ethers.utils.commify(
    ethers.utils.formatEther(totalSupply)
  );
  console.log('TestToken total supply:', formattedTotalSupply);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
