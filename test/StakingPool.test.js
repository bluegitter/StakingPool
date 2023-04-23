const StakingPool = artifacts.require("StakingPool");
const IERC20 = artifacts.require("IERC20");
const { assert } = require('chai');
const { BN, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

contract('StakingPool', (accounts) => {
    const owner = accounts[0];
    const userA = accounts[1];
    const userB = accounts[2];
    const tokenAddress = '0x7f89bC9302A5B04859102BFe5A39ec7e600F12Bf';  //代币合约地址
    let stakingPool, stETH;

    console.log("owner :", owner)
    console.log("userA :", userA)
    console.log("userB :", userB)

    beforeEach(async () => {
        stakingPool = await StakingPool.deployed();
        stETH = await IERC20.at(tokenAddress);

        const totalSupply = await stETH.totalSupply();
        console.log("totalSupply :", totalSupply.toString())

        // await stETH.mint(owner, ether('100000'), { from: owner });
        // Transfer stETH tokens to userA and userB
        await stETH.transfer(userA, 100, { from: owner });
        await stETH.transfer(userB, 100, { from: owner });
    });

    it('should allow users to stake and withdraw stETH correctly', async () => {
        // Approve staking for userA and userB
        await stETH.approve(stakingPool.address, 20, { from: userA });
        await stETH.approve(stakingPool.address, 20, { from: userB });

        // Stake tokens
        await stakingPool.stake(20, { from: userA });
        await stakingPool.stake(2, { from: userB });

        balanceA = await stakingPool.balanceOf(userA);
        balanceB = await stakingPool.balanceOf(userB);

        // Check staked amounts
        console.log("staked amount for userA, " + balanceA.toString());
        assert(balanceA.eq(new BN(20)), "Incorrect staked amount for userA");
        assert(balanceB.eq(new BN(2)), "Incorrect staked amount for userB");

        // Withdraw tokens for userB
        await stakingPool.withdraw(2, { from: userB });

        // Check new staked amounts
        assert((await stakingPool.balanceOf(userA)).eq(new BN(20)), "Incorrect staked amount for userA after withdrawal");
        assert((await stakingPool.balanceOf(userB)).eq(new BN(0)), "Incorrect staked amount for userB after withdrawal");
    });
});
