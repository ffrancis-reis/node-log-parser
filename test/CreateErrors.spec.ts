import { CreateErrors, IError } from '../src/CreateErrors'
import ILogDTO from '../src/LogDTO'

describe('create errors', () => {
  it('should create a error', () => {
    const logs: ILogDTO[] = [
      {
        date: new Date('2021-08-09T02:12:51.253Z'),
        loglevel: 'error',
        transaction: {
          transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978',
          details: 'Service is started',
          err: 'critical error'
        }
      }
    ]

    const createErrors = new CreateErrors()

    const error = createErrors.executeParse(logs)[0]
    const expectedError: IError = {
      err: 'critical error',
      loglevel: 'error',
      timestamp: '1628475171253',
      transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978'
    }

    expect(error).toEqual(expectedError)
  })

  it('should not create a error', () => {
    const logs: ILogDTO[] = [
      {
        date: new Date('2021-08-09T02:12:51.253Z'),
        loglevel: 'warn',
        transaction: {
          transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978',
          details: 'Service is started',
          err: 'warn'
        }
      }
    ]

    const createErrors = new CreateErrors()

    const error = createErrors.executeParse(logs)[0]

    expect(error).toBeUndefined()
  })
})
