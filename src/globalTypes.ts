import { PropsWithChildren } from 'react';


export type Nullable<T> = T | null;

export type Primitive = Maybe<ObjectKey | bigint | boolean>;

export type Optional<T> = T | undefined;

export type Maybe<T> = T | null | undefined;


export type ObjectKey = string | number | symbol;

export type WithSymbol <T extends object = {}> = { symbol: string } & T;

export type WithId<T extends object = {}> = { id: number } & T;

export interface ReactFC<T = {}> extends React.FC<PropsWithChildren<T>> {
}
