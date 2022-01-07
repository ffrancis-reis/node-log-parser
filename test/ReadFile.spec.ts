import { ReadFile } from '../src/ReadFile'
import fs from 'fs'

jest.mock('fs')

describe('read file', () => {
  const mockFS: jest.Mocked<typeof fs> = <jest.Mocked<typeof fs>>fs

  it('should read a file', () => {
    mockFS.existsSync.mockReturnValue(true)
    mockFS.readFileSync('file', 'utf8')

    const readFile = new ReadFile('file')
    readFile.executeAction()

    expect(mockFS.readFileSync).toHaveBeenCalled()
  })

  it('should not read a file', () => {
    const consoleSpy = jest.spyOn(console, 'error')
    mockFS.existsSync.mockReturnValue(false)

    const readFile = new ReadFile('')
    readFile.executeAction()

    expect(readFile.data).toBeUndefined()
    expect(consoleSpy).toHaveBeenCalledWith("Input file doesn't exists.")
  })
})
