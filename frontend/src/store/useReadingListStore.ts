import create from "zustand";
import { persist } from "zustand/middleware";
import { AppState, Book, MyPersist } from "../types";

const useReadingListStore = create<AppState>(
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
      name: "reading-list-storage",
    }
  )
);

export default useReadingListStore;
