/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import { Algodv2, OnApplicationComplete, Transaction, TransactionWithSigner, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "increment()uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "decrement()uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMQpieXRlY2Jsb2NrIDB4NjM2Zjc1NmU3NDY1NzIgMHgxNTFmN2M3NQp0eG4gTnVtQXBwQXJncwppbnRjXzAgLy8gMAo9PQpibnogbWFpbl9sNgp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDRhMzI1OTAxIC8vICJpbmNyZW1lbnQoKXVpbnQ2NCIKPT0KYm56IG1haW5fbDUKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHhkYWU2ZTRjZSAvLyAiZGVjcmVtZW50KCl1aW50NjQiCj09CmJueiBtYWluX2w0CmVycgptYWluX2w0Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIGRlY3JlbWVudGNhc3Rlcl8zCmludGNfMSAvLyAxCnJldHVybgptYWluX2w1Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIGluY3JlbWVudGNhc3Rlcl8yCmludGNfMSAvLyAxCnJldHVybgptYWluX2w2Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CmJueiBtYWluX2w4CmVycgptYWluX2w4Ogp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAo9PQphc3NlcnQKaW50Y18xIC8vIDEKcmV0dXJuCgovLyBpbmNyZW1lbnQKaW5jcmVtZW50XzA6CnByb3RvIDAgMQppbnRjXzAgLy8gMAp0eG4gU2VuZGVyCmdsb2JhbCBDcmVhdG9yQWRkcmVzcwo9PQovLyB1bmF1dGhvcml6ZWQKYXNzZXJ0CmJ5dGVjXzAgLy8gImNvdW50ZXIiCmJ5dGVjXzAgLy8gImNvdW50ZXIiCmFwcF9nbG9iYWxfZ2V0CmludGNfMSAvLyAxCisKYXBwX2dsb2JhbF9wdXQKYnl0ZWNfMCAvLyAiY291bnRlciIKYXBwX2dsb2JhbF9nZXQKZnJhbWVfYnVyeSAwCnJldHN1YgoKLy8gZGVjcmVtZW50CmRlY3JlbWVudF8xOgpwcm90byAwIDEKaW50Y18wIC8vIDAKdHhuIFNlbmRlcgpnbG9iYWwgQ3JlYXRvckFkZHJlc3MKPT0KLy8gdW5hdXRob3JpemVkCmFzc2VydApieXRlY18wIC8vICJjb3VudGVyIgpieXRlY18wIC8vICJjb3VudGVyIgphcHBfZ2xvYmFsX2dldAppbnRjXzEgLy8gMQotCmFwcF9nbG9iYWxfcHV0CmJ5dGVjXzAgLy8gImNvdW50ZXIiCmFwcF9nbG9iYWxfZ2V0CmZyYW1lX2J1cnkgMApyZXRzdWIKCi8vIGluY3JlbWVudF9jYXN0ZXIKaW5jcmVtZW50Y2FzdGVyXzI6CnByb3RvIDAgMAppbnRjXzAgLy8gMApjYWxsc3ViIGluY3JlbWVudF8wCmZyYW1lX2J1cnkgMApieXRlY18xIC8vIDB4MTUxZjdjNzUKZnJhbWVfZGlnIDAKaXRvYgpjb25jYXQKbG9nCnJldHN1YgoKLy8gZGVjcmVtZW50X2Nhc3RlcgpkZWNyZW1lbnRjYXN0ZXJfMzoKcHJvdG8gMCAwCmludGNfMCAvLyAwCmNhbGxzdWIgZGVjcmVtZW50XzEKZnJhbWVfYnVyeSAwCmJ5dGVjXzEgLy8gMHgxNTFmN2M3NQpmcmFtZV9kaWcgMAppdG9iCmNvbmNhdApsb2cKcmV0c3Vi",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu"
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 1
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "schema": {
    "global": {
      "declared": {
        "counter": {
          "type": "uint64",
          "key": "counter",
          "descr": "A counter for showing how to use application state"
        }
      },
      "reserved": {}
    },
    "local": {
      "declared": {},
      "reserved": {}
    }
  },
  "contract": {
    "name": "CounterApp",
    "methods": [
      {
        "name": "increment",
        "args": [],
        "returns": {
          "type": "uint64"
        },
        "desc": "increment the counter"
      },
      {
        "name": "decrement",
        "args": [],
        "returns": {
          "type": "uint64"
        },
        "desc": "decrement the counter"
      }
    ],
    "networks": {}
  },
  "bare_call_config": {
    "no_op": "CREATE"
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the CounterApp smart contract.
 */
export type CounterApp = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'increment()uint64' | 'increment', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
    }>
    & Record<'decrement()uint64' | 'decrement', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      /**
       * A counter for showing how to use application state
       */
      'counter'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type CounterAppSig = keyof CounterApp['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends CounterAppSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the CounterApp smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends CounterAppSig> = CounterApp['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the CounterApp smart contract to the method's return type
 */
export type MethodReturn<TSignature extends CounterAppSig> = CounterApp['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type CounterAppCreateCalls = (typeof CounterAppCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type CounterAppCreateCallParams =
  | (TypedCallParams<undefined> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type CounterAppDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: CounterAppCreateCalls) => CounterAppCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class CounterAppCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the CounterApp smart contract using a bare call
       *
       * @param params Any parameters for the call
       * @returns A TypedCallParams object for the call
       */
      bare(params: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: undefined,
          methodArgs: undefined,
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the increment()uint64 ABI method
   *
   * increment the counter
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static increment(args: MethodArgs<'increment()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'increment()uint64' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the decrement()uint64 ABI method
   *
   * decrement the counter
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static decrement(args: MethodArgs<'decrement()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'decrement()uint64' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
}

/**
 * A client to make calls to the CounterApp smart contract
 */
export class CounterAppClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `CounterAppClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof CounterApp['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the CounterApp smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: CounterAppDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(CounterAppCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the CounterApp smart contract using a bare call.
       *
       * @param args The arguments for the bare call
       * @returns The create result
       */
      bare(args: BareCallArgs & AppClientCallCoreParams & AppClientCompilationParams & CoreAppCallArgs & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<undefined>> {
        return $this.appClient.create(args) as unknown as Promise<AppCallTransactionResultOfType<undefined>>
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the CounterApp smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the increment()uint64 ABI method.
   *
   * increment the counter
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public increment(args: MethodArgs<'increment()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CounterAppCallFactory.increment(args, params))
  }

  /**
   * Calls the decrement()uint64 ABI method.
   *
   * decrement the counter
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public decrement(args: MethodArgs<'decrement()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CounterAppCallFactory.decrement(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<CounterApp['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get counter() {
        return CounterAppClient.getIntegerState(state, 'counter')
      },
    }
  }

  public compose(): CounterAppComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      increment(args: MethodArgs<'increment()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.increment(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      decrement(args: MethodArgs<'decrement()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.decrement(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as CounterAppComposer
  }
}
export type CounterAppComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the increment()uint64 ABI method.
   *
   * increment the counter
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  increment(args: MethodArgs<'increment()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): CounterAppComposer<[...TReturns, MethodReturn<'increment()uint64'>]>

  /**
   * Calls the decrement()uint64 ABI method.
   *
   * decrement the counter
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  decrement(args: MethodArgs<'decrement()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): CounterAppComposer<[...TReturns, MethodReturn<'decrement()uint64'>]>

  /**
   * Makes a clear_state call to an existing instance of the CounterApp smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): CounterAppComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): CounterAppComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<CounterAppComposerResults<TReturns>>
}
export type CounterAppComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}