import AbstractParse from './AbstractParse'
import ILogDTO from './LogDTO'

export class CreateLogs extends AbstractParse {
  constructor() {
    super()
  }

  executeParse(data: string[]): ILogDTO[] {
    return data.map(dataLine => {
      const line = dataLine.split(' - ')

      const log: ILogDTO = {
        date: new Date(line[0]),
        loglevel: line[1],
        transaction: JSON.parse(line[2])
      }

      return log
    })
  }
}
