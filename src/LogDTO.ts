interface ILogTransaction {
  transactionId: string
  details: string
  err?: string
}

export default interface ILogDTO {
  date: Date
  loglevel: string
  transaction: ILogTransaction
}
