import { Url } from '../domain/url.js';

export class ShortenUrl {
  constructor(urlRepository, idGenerator) {
    this.urlRepository = urlRepository;
    this.idGenerator = idGenerator;
  }

  async execute(originalUrl) {
    const shortCode = this.idGenerator.generate();
    const url = new Url(null, originalUrl, shortCode, new Date());
    await this.urlRepository.save(url);
    return url;
  }
}
