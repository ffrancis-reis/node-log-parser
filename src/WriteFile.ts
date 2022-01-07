import fs from 'fs'
import AbstractFileAction from './AbstractFileAction'

export class WriteFile extends AbstractFileAction {
  data: object

  constructor(data: object, outputFile: string) {
    super(outputFile)
    this.data = data
  }

  public executeAction(): void {
    fs.writeFileSync(this.file, JSON.stringify(this.data))
  }
}
