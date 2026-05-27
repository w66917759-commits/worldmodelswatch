import { newsItems } from "./news";

export const timeline = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
