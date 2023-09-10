type MatchType = {
  id: string;
  players: {
    id: string;
    name: string;
    avatar: string;
  }[];
  stadium?: {
    id: string;
    name: string;
    address: string;
    images: string[];
  };
  mode?: "single" | "multiple";
  date?: Date;
  playerCount?: number;
  owner: {
    id: string;
    name: string;
    avatar: string;
  };
  status: "successful" | "warning" | "pending";
};
