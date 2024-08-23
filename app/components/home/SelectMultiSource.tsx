"use client";

import React, { useState } from "react";
import { usePreferences } from "@/app/context/NewsPreferencesContext";
import { newsSources } from "@/app/data/Articals";

interface Option {
  label: string;
  value: string;
}

export const SelectMultiSource = () => {
  const { sources, setSources } = usePreferences();
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  // Filter options based on input value
  const filteredOptions = newsSources.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelectOption = (option: Option) => {
    if (!sources.some((selected) => selected === option.value)) {
      setSources([...sources, option.value]);
    }
    setInputValue("");
    setShowOptions(false);
  };

  const handleRemoveOption = (value: string) => {
    const filteredSources = sources.filter((option) => option !== value);
    setSources(filteredSources);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onFocus={() => setShowOptions(true)}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setTimeout(() => setShowOptions(false), 150)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Select Source"
          autoFocus={false}
        />
        {showOptions && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto shadow-lg z-10">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="cursor-pointer p-2 hover:bg-black hover:text-white"
                  onMouseDown={() => handleSelectOption(option)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No sources found</li>
            )}
          </ul>
        )}
      </div>
      <div className="flex flex-wrap mt-4">
        {sources.map((option) => (
          <div
            key={option}
            className="bg-black text-white rounded-full px-3 py-1 mr-2 mb-2 flex items-center"
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
