const StakingPool = artifacts.require("StakingPool");

module.exports = async function (deployer, network, accounts) {
    const rewardsDistribution = accounts[1]; // 提供奖励分发地址，您可以根据需要更改为其他地址
    const rewardsToken = '0x7f89bC9302A5B04859102BFe5A39ec7e600F12Bf'; // 提供奖励代币合约地址
    const stakingToken = '0x7f89bC9302A5B04859102BFe5A39ec7e600F12Bf'; // 提供质押代币合约地址
    const durationInDays = 30; // 提供奖励持续时间（以天为单位）

    await deployer.deploy(StakingPool, rewardsDistribution, rewardsToken, stakingToken, durationInDays);
};
