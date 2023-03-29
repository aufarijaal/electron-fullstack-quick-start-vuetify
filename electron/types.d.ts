interface User {
  id?: number;
  username: string;
  password: string;
  access_level?: "basic" | "full";
}
