import { IError } from '../src/CreateErrors'
import { WriteFile } from '../src/WriteFile'

describe('write file', () => {
  it('should write a file', () => {
    const file = 'app.log'
    const error: IError = {
      err: 'critical error',
      loglevel: 'error',
      timestamp: '1628475171253',
      transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978'
    }

    const writeFile = new WriteFile(error, file)
    writeFile.executeAction()

    expect(writeFile.data).toBeTruthy()
  })

  it('should write a file w/o errors', () => {
    const file = 'app.log'
    const writeFile = new WriteFile({}, file)
    writeFile.executeAction()

    expect(writeFile.data).toEqual({})
  })
})
