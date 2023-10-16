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
  mode?: "single" | "multiple";
  date?: Date;
  maxPlayers?: number;
  owner: {
    id: string;
    name: string;
    image: string;
  };
  status: "successful" | "warning" | "pending";
};
