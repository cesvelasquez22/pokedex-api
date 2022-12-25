import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './seed.types';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  async execute() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    for (const { name, url } of data.results) {
      const segments = url.split('/');
      const pokeId = +segments[segments.length - 2];
      console.log({ name, pokeId });
    }

    return data.results;
  }
}
