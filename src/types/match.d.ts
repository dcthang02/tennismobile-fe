type MatchType = {
  id: string;
  players: {
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
};
