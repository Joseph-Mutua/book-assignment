import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
}

interface ReadingListState {
  readingList: Book[];
  addBook: (book: Book) => void;
  removeBook: (book: Book) => void;
}

type MyState = ReadingListState;
type MyPersist = (
  config: StateCreator<MyState>,
  options: PersistOptions<MyState>
) => StateCreator<MyState>;

const useReadingListStore = create<MyState>(
  (persist as MyPersist)(
    (set) => ({
      readingList: [],
      addBook: (book: Book) =>
        set((state) => ({
          readingList: [...state.readingList, book],
        })),
      removeBook: (book: Book) =>
        set((state) => ({
          readingList: state.readingList.filter(
            (b) => b.title !== book.title || b.author !== book.author
          ),
        })),
    }),
    {
      name: "reading-list-storage", // name of the item in storage
    }
  )
);

export default useReadingListStore;
