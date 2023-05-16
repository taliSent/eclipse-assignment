export type Response<T> = {
  count: number;
  next: string;
  previous: string | null;
  results: T[];
};
