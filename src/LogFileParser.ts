import AbstractParse from './AbstractParse'

export class LogFileParser {
  constructor(
    private data: string[],
    private createLogs: AbstractParse,
    private createErrors: AbstractParse
  ) {}

  execute(): object {
    const logs = this.createLogs.executeParse(this.data)

    const errors = this.createErrors.executeParse(logs)

    return errors
  }
}
