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
    "hello(string)string": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "add(uint64,uint64)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "subtract(uint64,uint64)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMQpieXRlY2Jsb2NrIDB4MTUxZjdjNzUgMHgKdHhuIE51bUFwcEFyZ3MKaW50Y18wIC8vIDAKPT0KYm56IG1haW5fbDgKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHgwMmJlY2UxMSAvLyAiaGVsbG8oc3RyaW5nKXN0cmluZyIKPT0KYm56IG1haW5fbDcKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHhmZTZiZGY2OSAvLyAiYWRkKHVpbnQ2NCx1aW50NjQpdWludDY0Igo9PQpibnogbWFpbl9sNgp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDQ5Nzc2YjcwIC8vICJzdWJ0cmFjdCh1aW50NjQsdWludDY0KXVpbnQ2NCIKPT0KYm56IG1haW5fbDUKZXJyCm1haW5fbDU6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgc3VidHJhY3RjYXN0ZXJfNQppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sNjoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiBhZGRjYXN0ZXJfNAppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sNzoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiBoZWxsb2Nhc3Rlcl8zCmludGNfMSAvLyAxCnJldHVybgptYWluX2w4Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CmJueiBtYWluX2wxMAplcnIKbWFpbl9sMTA6CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCj09CmFzc2VydAppbnRjXzEgLy8gMQpyZXR1cm4KCi8vIGhlbGxvCmhlbGxvXzA6CnByb3RvIDEgMQpieXRlY18xIC8vICIiCnB1c2hieXRlcyAweDQ4NjU2YzZjNmYyYzIwIC8vICJIZWxsbywgIgpmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKY29uY2F0CmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApsZW4KaXRvYgpleHRyYWN0IDYgMApmcmFtZV9kaWcgMApjb25jYXQKZnJhbWVfYnVyeSAwCnJldHN1YgoKLy8gYWRkCmFkZF8xOgpwcm90byAyIDEKaW50Y18wIC8vIDAKZnJhbWVfZGlnIC0yCmZyYW1lX2RpZyAtMQorCmZyYW1lX2J1cnkgMApyZXRzdWIKCi8vIHN1YnRyYWN0CnN1YnRyYWN0XzI6CnByb3RvIDIgMQppbnRjXzAgLy8gMApmcmFtZV9kaWcgLTIKZnJhbWVfZGlnIC0xCi0KZnJhbWVfYnVyeSAwCnJldHN1YgoKLy8gaGVsbG9fY2FzdGVyCmhlbGxvY2FzdGVyXzM6CnByb3RvIDAgMApieXRlY18xIC8vICIiCmR1cAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmZyYW1lX2J1cnkgMQpmcmFtZV9kaWcgMQpjYWxsc3ViIGhlbGxvXzAKZnJhbWVfYnVyeSAwCmJ5dGVjXzAgLy8gMHgxNTFmN2M3NQpmcmFtZV9kaWcgMApjb25jYXQKbG9nCnJldHN1YgoKLy8gYWRkX2Nhc3RlcgphZGRjYXN0ZXJfNDoKcHJvdG8gMCAwCmludGNfMCAvLyAwCmR1cG4gMgp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmJ0b2kKZnJhbWVfYnVyeSAxCnR4bmEgQXBwbGljYXRpb25BcmdzIDIKYnRvaQpmcmFtZV9idXJ5IDIKZnJhbWVfZGlnIDEKZnJhbWVfZGlnIDIKY2FsbHN1YiBhZGRfMQpmcmFtZV9idXJ5IDAKYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CmZyYW1lX2RpZyAwCml0b2IKY29uY2F0CmxvZwpyZXRzdWIKCi8vIHN1YnRyYWN0X2Nhc3RlcgpzdWJ0cmFjdGNhc3Rlcl81Ogpwcm90byAwIDAKaW50Y18wIC8vIDAKZHVwbiAyCnR4bmEgQXBwbGljYXRpb25BcmdzIDEKYnRvaQpmcmFtZV9idXJ5IDEKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgpidG9pCmZyYW1lX2J1cnkgMgpmcmFtZV9kaWcgMQpmcmFtZV9kaWcgMgpjYWxsc3ViIHN1YnRyYWN0XzIKZnJhbWVfYnVyeSAwCmJ5dGVjXzAgLy8gMHgxNTFmN2M3NQpmcmFtZV9kaWcgMAppdG9iCmNvbmNhdApsb2cKcmV0c3Vi",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu"
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "schema": {
    "global": {
      "declared": {},
      "reserved": {}
    },
    "local": {
      "declared": {},
      "reserved": {}
    }
  },
  "contract": {
    "name": "hello_world",
    "methods": [
      {
        "name": "hello",
        "args": [
          {
            "type": "string",
            "name": "name"
          }
        ],
        "returns": {
          "type": "string"
        }
      },
      {
        "name": "add",
        "args": [
          {
            "type": "uint64",
            "name": "a"
          },
          {
            "type": "uint64",
            "name": "b"
          }
        ],
        "returns": {
          "type": "uint64"
        },
        "desc": "Second: Returns the sum of two numbers"
      },
      {
        "name": "subtract",
        "args": [
          {
            "type": "uint64",
            "name": "a"
          },
          {
            "type": "uint64",
            "name": "b"
          }
        ],
        "returns": {
          "type": "uint64"
        },
        "desc": "Second: Returns the difference between two numbers"
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
 * Defines the types of available calls and state of the HelloWorld smart contract.
 */
export type HelloWorld = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'hello(string)string' | 'hello', {
      argsObj: {
        name: string
      }
      argsTuple: [name: string]
      returns: string
    }>
    & Record<'add(uint64,uint64)uint64' | 'add', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
    & Record<'subtract(uint64,uint64)uint64' | 'subtract', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type HelloWorldSig = keyof HelloWorld['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends HelloWorldSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the HelloWorld smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends HelloWorldSig> = HelloWorld['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the HelloWorld smart contract to the method's return type
 */
export type MethodReturn<TSignature extends HelloWorldSig> = HelloWorld['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type HelloWorldCreateCalls = (typeof HelloWorldCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type HelloWorldCreateCallParams =
  | (TypedCallParams<undefined> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type HelloWorldDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: HelloWorldCreateCalls) => HelloWorldCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class HelloWorldCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the hello_world smart contract using a bare call
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
   * Constructs a no op call for the hello(string)string ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static hello(args: MethodArgs<'hello(string)string'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'hello(string)string' as const,
      methodArgs: Array.isArray(args) ? args : [args.name],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the add(uint64,uint64)uint64 ABI method
   *
   * Second: Returns the sum of two numbers
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static add(args: MethodArgs<'add(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'add(uint64,uint64)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the subtract(uint64,uint64)uint64 ABI method
   *
   * Second: Returns the difference between two numbers
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static subtract(args: MethodArgs<'subtract(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'subtract(uint64,uint64)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
}

/**
 * A client to make calls to the hello_world smart contract
 */
export class HelloWorldClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `HelloWorldClient`
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
  public async call<TSignature extends keyof HelloWorld['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the hello_world smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: HelloWorldDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(HelloWorldCallFactory.create)
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
       * Creates a new instance of the hello_world smart contract using a bare call.
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
   * Makes a clear_state call to an existing instance of the hello_world smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the hello(string)string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public hello(args: MethodArgs<'hello(string)string'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(HelloWorldCallFactory.hello(args, params))
  }

  /**
   * Calls the add(uint64,uint64)uint64 ABI method.
   *
   * Second: Returns the sum of two numbers
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public add(args: MethodArgs<'add(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(HelloWorldCallFactory.add(args, params))
  }

  /**
   * Calls the subtract(uint64,uint64)uint64 ABI method.
   *
   * Second: Returns the difference between two numbers
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public subtract(args: MethodArgs<'subtract(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(HelloWorldCallFactory.subtract(args, params))
  }

  public compose(): HelloWorldComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      hello(args: MethodArgs<'hello(string)string'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.hello(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      add(args: MethodArgs<'add(uint64,uint64)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.add(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      subtract(args: MethodArgs<'subtract(uint64,uint64)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.subtract(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
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
    } as unknown as HelloWorldComposer
  }
}
export type HelloWorldComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the hello(string)string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  hello(args: MethodArgs<'hello(string)string'>, params?: AppClientCallCoreParams & CoreAppCallArgs): HelloWorldComposer<[...TReturns, MethodReturn<'hello(string)string'>]>

  /**
   * Calls the add(uint64,uint64)uint64 ABI method.
   *
   * Second: Returns the sum of two numbers
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  add(args: MethodArgs<'add(uint64,uint64)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): HelloWorldComposer<[...TReturns, MethodReturn<'add(uint64,uint64)uint64'>]>

  /**
   * Calls the subtract(uint64,uint64)uint64 ABI method.
   *
   * Second: Returns the difference between two numbers
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  subtract(args: MethodArgs<'subtract(uint64,uint64)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): HelloWorldComposer<[...TReturns, MethodReturn<'subtract(uint64,uint64)uint64'>]>

  /**
   * Makes a clear_state call to an existing instance of the hello_world smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): HelloWorldComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): HelloWorldComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<HelloWorldComposerResults<TReturns>>
}
export type HelloWorldComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
