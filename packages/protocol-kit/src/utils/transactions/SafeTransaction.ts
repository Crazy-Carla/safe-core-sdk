import {
  SafeSignature,
  SafeTransaction,
  SafeTransactionData
} from '@safe-global/safe-core-sdk-types'
import { buildSignatureBytes } from '../signatures'

class EthSafeTransaction implements SafeTransaction {
  data: SafeTransactionData
  signatures: Map<string, SafeSignature> = new Map()

  constructor(data: SafeTransactionData) {
    this.data = data
  }

  addSignature(signature: SafeSignature): void {
    this.signatures.set(signature.signer.toLowerCase(), signature)
  }

  encodedSignatures(): string {
    return buildSignatureBytes(Array.from(this.signatures.values()))
  }
}

export default EthSafeTransaction
