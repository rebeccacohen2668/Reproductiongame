
export interface Pair {
  concept: string;
  definition: string;
}

export interface Level {
  name: string;
  pairs: Pair[];
}

export interface Unit {
  intro: string;
  levels: Level[];
}

export interface GameData {
  [unitName: string]: Unit;
}
