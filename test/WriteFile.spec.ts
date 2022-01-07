import { IError } from '../src/CreateErrors'
import { WriteFile } from '../src/WriteFile'
import fs from 'fs'

jest.mock('fs')

describe('write file', () => {
  const mockFS: jest.Mocked<typeof fs> = <jest.Mocked<typeof fs>>fs

  it('should write a file', () => {
    mockFS.writeFileSync('file', 'utf8')

    const error: IError = {
      err: 'critical error',
      loglevel: 'error',
      timestamp: '1628475171253',
      transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978'
    }

    const writeFile = new WriteFile(error, 'file')
    writeFile.executeAction()

    expect(writeFile.data).toBeTruthy()
    expect(mockFS.writeFileSync).toHaveBeenCalled()
  })

  it('should write a file w/o errors', () => {
    mockFS.writeFileSync('file', 'utf8')

    const writeFile = new WriteFile({}, 'file')
    writeFile.executeAction()

    expect(writeFile.data).toEqual({})
    expect(mockFS.writeFileSync).toHaveBeenCalled()
  })
})
