
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum PokemonTypes {
    NORMAL = "NORMAL",
    FIRE = "FIRE",
    WATER = "WATER",
    ELECTRIC = "ELECTRIC",
    GRASS = "GRASS",
    ICE = "ICE",
    FIGHTING = "FIGHTING",
    POISON = "POISON",
    GROUND = "GROUND",
    FLYING = "FLYING",
    PSYCHIC = "PSYCHIC",
    BUG = "BUG",
    ROCK = "ROCK",
    GHOST = "GHOST",
    DRAGON = "DRAGON",
    DARK = "DARK",
    STEEL = "STEEL",
    FAIRY = "FAIRY"
}

export interface IQuery {
    pokemon(names?: Nullable<Nullable<string>[]>, ids?: Nullable<Nullable<string>[]>): Nullable<Nullable<Pokemon>[]> | Promise<Nullable<Nullable<Pokemon>[]>>;
    types(): Nullable<Nullable<PokemonTypes>[]> | Promise<Nullable<Nullable<PokemonTypes>[]>>;
}

export interface Pokemon {
    id: string;
    name: string;
    types?: Nullable<PokemonTypes[]>;
    weight: number;
    height: number;
    image: string;
}

type Nullable<T> = T | null;
