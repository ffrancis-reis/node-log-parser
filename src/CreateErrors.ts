import AbstractParse from './AbstractParse'
import ILogDTO from './LogDTO'

export interface IError {
  timestamp: string
  loglevel: string
  transactionId: string
  err: string
}

export class CreateErrors extends AbstractParse {
  constructor() {
    super()
  }

  executeParse(data: ILogDTO[]): IError[] {
    return data
      .filter(log => log.loglevel === 'error')
      .map(log => {
        const error: IError = {
          timestamp: log.date.getTime().toString(),
          loglevel: log.loglevel,
          transactionId: log.transaction.transactionId,
          err: log.transaction.err
        }

        return error
      })
  }
}
