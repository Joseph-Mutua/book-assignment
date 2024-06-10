import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

export interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
}

export interface ReadingListState {
  readingList: Book[];
  addBook: (book: Book) => void;
  removeBook: (book: Book) => void;
}

export type AppState = ReadingListState;
export type MyPersist = (
  config: StateCreator<AppState>,
  options: PersistOptions<AppState>
) => StateCreator<AppState>;


export interface SnackbarMessage {
  message: string;
  key: number;
  severity: "success" | "info";
}