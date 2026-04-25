import { InMemoryUrlRepository } from './infrastructure/in-memory-url-repository.js';
import { NanoidGenerator } from './infrastructure/nanoid-generator.js';
import { ShortenUrl } from './application/shorten-url.js';
import { GetOriginalUrl } from './application/get-original-url.js';
import { ExpressServer } from './infrastructure/express-server.js';

const urlRepository = new InMemoryUrlRepository();
const idGenerator = new NanoidGenerator();
const shortenUrl = new ShortenUrl(urlRepository, idGenerator);
const getOriginalUrl = new GetOriginalUrl(urlRepository);

const server = new ExpressServer(shortenUrl, getOriginalUrl);
server.start(3000);
