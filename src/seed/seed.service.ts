import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  execute() {
    return { message: 'Executed!' };
  }
}
