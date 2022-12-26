import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './seed.types';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
  ) {}
  async execute() {
    await this.pokemonModel.deleteMany(); // Removes all data
    const limit = 650;
    const { data } = await this.axios.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
    );

    // const insertPromises = [];
    const pokemonsToInsert: { name: string; pokeId: number }[] = [];

    for (const { name, url } of data.results) {
      const segments = url.split('/');
      const pokeId = +segments[segments.length - 2];
      //   console.log({ name, pokeId });
      //   const pokemon = await this.pokemonModel.create({ name, pokeId });
      //   insertPromises.push(this.pokemonModel.create({ name, pokeId }));
      pokemonsToInsert.push({ name, pokeId });
    }

    // await Promise.all(insertPromises);
    await this.pokemonModel.insertMany(pokemonsToInsert);

    return { message: `${limit} pokemons has been inserted!.` };
  }
}
