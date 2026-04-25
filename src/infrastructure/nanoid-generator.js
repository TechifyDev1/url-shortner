import { nanoid } from 'nanoid';

export class NanoidGenerator {
  generate() {
    return nanoid(8);
  }
}
