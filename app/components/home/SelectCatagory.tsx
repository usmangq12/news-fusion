"use client";
import { usePreferences } from "@/app/context/NewsPreferencesContext";
import React, { useState } from "react";
import { categoryData } from "@/app/data/Articals";

interface Option {
  label: string;
  value: string;
}

export const SelectCatagory = () => {
  const { categories, setCategories } = usePreferences();
  const [inputValue, setInputValue] = useState("");

  const filteredOptions = categoryData.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelectOption = (option: Option) => {
    if (!categories.some((selected) => selected === option.value)) {
      setCategories([...categories, option.value]);
    }
    setInputValue("");
  };

  const handleRemoveOption = (value: string) => {
    setCategories(categories.filter((option) => option !== value));
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="select Categary"
        />
        {inputValue && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto shadow-lg z-10">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className="cursor-pointer p-2 hover:bg-indigo-500 hover:text-white"
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <li className="p-2 text-gray-500">No options found</li>
            )}
          </ul>
        )}
      </div>
      <div className="flex flex-wrap mt-4">
        {categories.map((option) => (
          <div
            key={option}
            className="bg-indigo-500 text-white rounded-full px-3 py-1 mr-2 mb-2 flex items-center"
          >
            {option}
            <button
              onClick={() => handleRemoveOption(option)}
              className="ml-2 text-sm text-gray-200 hover:text-white focus:outline-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
