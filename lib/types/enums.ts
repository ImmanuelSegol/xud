/** An enumeration of payment channel network clients that support token swaps. */
export enum SwapClients {
  LND,
  RAIDEN,
}

export enum OrderingDirection {
  DESC = 'DESC',
  ASC = 'ASC',
}

export enum SwapDealRole {
  Taker = 0,
  Maker = 1,
}

export enum SwapDealPhase {
  SwapCreated = 0,
  SwapRequested = 1,
  SwapAgreed = 2,
  AmountSent = 3,
  AmountReceived = 4,
  SwapCompleted = 5,
}

export enum SwapDealState {
  Active = 0,
  Error = 1,
  Completed = 2,
}

export enum SwapRejectionReason {
  /** The trading pair specified by a swap request is not supported. */
  PAIR_NOT_SUPPORTED,
  /** Could not find the order specified by a swap request. */
  ORDER_NOT_FOUND,
  /** The entire order specified by a swap request is on hold for a different ongoing swap. */
  ORDER_UNAVAILABLE,
  /** No route exists to send a payment */
  NO_ROUTE,
}
