import ContractSettings from '../../contractSettings';
import tronContract from '../../tronContract';
import abi from '../../../lib/abis/mainnet/Depot';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Depot(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  const address = this.contractSettings.addressList['Depot'];
  const tronWeb = this.contractSettings.tronWeb;
  this.signer = this.contractSettings.signer;
  this.contract = tronContract(abi, address, tronWeb, this.signer);

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.USDTdepositStartIndex = async () => {
    return await this.contract.USDTdepositStartIndex().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SUSDminimumDepositAmount = async () => {
    return await this.contract.SUSDminimumDepositAmount().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
   * @returns uint256[2]
   **/
  this.depositSUSD = async (amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.depositSUSD(amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.synth = async () => {
    return await this.contract.synth().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _owner {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.nominateNewOwner(_owner).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _paused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setPaused = async (_paused, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.setPaused(_paused).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<TrxAddress>}
   * @returns BigNumber
   **/
  this.SUSDsmallDeposits = async address_1 => {
    return await this.contract.SUSDsmallDeposits(address_1).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.withdrawMyDepositedUSDT = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.withdrawMyDepositedUSDT().send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _beneficiary {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.setSelfDestructBeneficiary(_beneficiary).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.fundsWallet = async () => {
    return await this.contract.fundsWallet().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.terminateSelfDestruct().send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.withdrawMyDepositedSUSD = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.withdrawMyDepositedSUSD().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.USDTtotalSellableDeposits = async () => {
    return await this.contract.USDTtotalSellableDeposits().call({ _isConstant: true });
  };

  /**
   * Set the Synth contract that the issuance controller uses to issue Synths.<br>
   * Transaction (consumes gas, requires signer)
   * @param _synth {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynth = async (_synth, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.setSynth(_synth).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.oksProxy = async () => {
    return await this.contract.oksProxy().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.paused = async () => {
    return await this.contract.paused().call({ _isConstant: true });
  };

  /**
   * Set the funds wallet where ETH raised is held.<br>
   * Transaction (consumes gas, requires signer)
   * @param _fundsWallet {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFundsWallet = async (_fundsWallet, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.setFundsWallet(_fundsWallet).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.acceptOwnership().send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.withdrawOikos = async (amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.withdrawOikos(amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeUSDTForSynths = async (amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.exchangeUSDTForSynths(amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<TrxAddress>}
   * @returns BigNumber
   **/
  this.USDTsmallDeposits = async address_1 => {
    return await this.contract.USDTsmallDeposits(address_1).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SUSDdepositStartIndex = async () => {
    return await this.contract.SUSDdepositStartIndex().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastPauseTime = async () => {
    return await this.contract.lastPauseTime().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeSynthsForUSDT = async (amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.exchangeSynthsForUSDT(amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SUSDtotalSellableDeposits = async () => {
    return await this.contract.SUSDtotalSellableDeposits().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.selfDestruct().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SUSDdepositEndIndex = async () => {
    return await this.contract.SUSDdepositEndIndex().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns Object
   **/
  this.USDTdeposits = async uint256_1 => {
    return await this.contract.USDTdeposits(uint256_1).call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.USDTminimumDepositAmount = async () => {
    return await this.contract.USDTminimumDepositAmount().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.initiateSelfDestruct = async txParams => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.initiateSelfDestruct().send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<TrxAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary().call({ _isConstant: true });
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns Object
   **/
  this.SUSDdeposits = async uint256_1 => {
    return await this.contract.SUSDdeposits(uint256_1).call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
   * @returns uint256[2]
   **/
  this.depositUSDT = async (amount, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.depositUSDT(amount).send(txParams);
    return { hash: txHash };
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.USDTdepositEndIndex = async () => {
    return await this.contract.USDTdepositEndIndex().call({ _isConstant: true });
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _oksProxy {String<TrxAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setOikos = async (_oksProxy, txParams) => {
    txParams = txParams || {};
    txParams = {
      // fee limit in SUN
      feeLimit: 100000000,
      ...txParams,
    };
    const txHash = await this.contract.setOikos(_oksProxy).send(txParams);
    return { hash: txHash };
  };
}

export default Depot;
