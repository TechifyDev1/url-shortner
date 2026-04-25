export class GetOriginalUrl {
  constructor(urlRepository) {
    this.urlRepository = urlRepository;
  }

  async execute(shortCode) {
    return await this.urlRepository.findByShortCode(shortCode);
  }
}
