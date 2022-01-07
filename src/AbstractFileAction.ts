export default abstract class AbstractFileAction {
  file: string

  constructor(file: string) {
    this.file = file
  }

  abstract executeAction(): void
}
