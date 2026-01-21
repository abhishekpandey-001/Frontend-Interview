export interface Blog {
  id?: string;          // 🎯 because our db.json folder is using id as string
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}
