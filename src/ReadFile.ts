import fs from 'fs'
import AbstractFileAction from './AbstractFileAction'

export class ReadFile extends AbstractFileAction {
  data: string[]

  constructor(inputFile: string) {
    super(inputFile)
  }

  executeAction(): void {
    if (fs.existsSync(this.file)) {
      try {
        this.data = fs.readFileSync(this.file, 'utf8').split('\n')
      } catch (err) {
        console.error(err)
      }
    } else {
      console.error("Input file doesn't exists.")
    }
  }
}
