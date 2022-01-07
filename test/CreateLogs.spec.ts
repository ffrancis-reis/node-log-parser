import { CreateLogs } from '../src/CreateLogs'
import ILogDTO from '../src/LogDTO'

describe('create logs', () => {
  it('should create a log', () => {
    const logs: string[] = [
      '2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}'
    ]

    const createLogs = new CreateLogs()

    const log = createLogs.executeParse(logs)[0]
    const expectedLog: ILogDTO = {
      date: new Date('2021-08-09T02:12:51.253Z'),
      loglevel: 'info',
      transaction: {
        transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978',
        details: 'Service is started'
      }
    }

    expect(log).toEqual(expectedLog)
  })

  it('should not create a log', () => {
    const logs: string[] = []

    const createLogs = new CreateLogs()

    const log = createLogs.executeParse(logs)[0]

    expect(log).toBeUndefined()
  })
})
