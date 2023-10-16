type MatchType = {
  id: string;
  players: {
    id: string;
    name: string;
    image: string;
  }[];
  stadium?: {
    id: string;
    name: string;
    address: string;
    images: string[];
  };
  date?: Date;
  maxPlayers?: number;
  owner: {
    id: string;
    name: string;
    image: string;
  };
};
