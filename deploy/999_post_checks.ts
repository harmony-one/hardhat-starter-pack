import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments} = hre;
  const {log} = deployments;

  const testToken = await deployments.get('TestToken');
  log({testToken: testToken.address});
  log(`testToken at ${testToken.address}`);
};
export default func;
func.runAtTheEnd = true;
