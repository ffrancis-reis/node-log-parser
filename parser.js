import { LogFileParser } from './src/LogFileParser'
import { ReadFile } from './src/ReadFile'
import { WriteFile } from './src/WriteFile'
import { CreateLogs } from './src/CreateLogs'
import { CreateErrors } from './src/CreateErrors'

const argv = require('minimist')(process.argv.slice(2))

const readFile = new ReadFile(argv.input)
readFile.executeAction()

const createLogs = new CreateLogs()
const createErrors = new CreateErrors()

const dataParsed = new LogFileParser(
  readFile.data,
  createLogs,
  createErrors
).execute()

const writeFile = new WriteFile(dataParsed, argv.output)
writeFile.executeAction()
