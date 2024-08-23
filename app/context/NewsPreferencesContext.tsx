"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { DateRange } from "react-day-picker";

import { newsSources } from "../data/Articals";
import { SelectOptionType } from "../types";

interface PreferencesContextType {
  sources: string[];
  categories: string[];
  authors: string[];
  selectedAuthors: string[];
  date: DateRange | undefined;
  setSources: (sources: string[]) => void;
  setCategories: (categories: string[]) => void;
  setAuthors: (authors: string[]) => void;
  setSelectedAuthors: (storedAuthors: string[]) => void;
  setDate: (date: DateRange | undefined) => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(
  undefined
);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [sources, setSources] = useState<string[]>([newsSources[0].value]);
  const [categories, setCategories] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  useEffect(() => {
    const storedSources = localStorage.getItem("sources");
    const storedCategories = localStorage.getItem("categories");
    const storedAuthors = localStorage.getItem("authors");
    const storeFilteredAuthors = localStorage.getItem("store-authors");
    const storedDate = localStorage.getItem("date");

    if (storedSources) setSources(JSON.parse(storedSources));
    if (storedCategories) setCategories(JSON.parse(storedCategories));
    if (storedAuthors) setAuthors(JSON.parse(storedAuthors));
    if (storeFilteredAuthors)
      setSelectedAuthors(JSON.parse(storeFilteredAuthors));
    if (storedDate && storedDate !== "undefined")
      setDate(JSON.parse(storedDate));
  }, []);

  useEffect(() => {
    localStorage.setItem("sources", JSON.stringify(sources));
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("authors", JSON.stringify(authors));
    localStorage.setItem("store-authors", JSON.stringify(selectedAuthors));
    localStorage.setItem("date", JSON.stringify(date));
  }, [sources, categories, authors, date]);

  return (
    <PreferencesContext.Provider
      value={{
        sources,
        setSources,
        categories,
        setCategories,
        authors,
        setAuthors,
        selectedAuthors,
        setSelectedAuthors,
        date,
        setDate,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
};
