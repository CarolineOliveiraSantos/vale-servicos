import { PtBr } from './strings/pt-br'
import { Translation } from './strings/translations'
interface RProps {
  string: Translation
  load(): Promise<void>
}
export const R: RProps = {
  string: PtBr,
  async load() {
    this.string = PtBr
  },
}
