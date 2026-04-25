import { UrlRepository } from '../domain/url-repository.js';

export class InMemoryUrlRepository extends UrlRepository {
  constructor() {
    super();
    this.urls = new Map();
  }

  async save(url) {
    this.urls.set(url.shortCode, url);
  }

  async findByShortCode(shortCode) {
    return this.urls.get(shortCode) || null;
  }
}
