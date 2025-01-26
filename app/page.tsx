"use client";
import React, { useState } from "react";
import EditMode from "../components/FormEditor";
import PreviewMode from "../components/FormPreview";
import ThemeSelector from "../components/ThemeSelector";

const Home: React.FC = () => {
  const [mode, setMode] = useState<"edit" | "preview">("edit");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Mode Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMode("edit")}
          className={`px-4 py-2 text-white rounded-md transition ${mode === "edit" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
            }`}
        >
          Edit Mode
        </button>
        <button
          onClick={() => setMode("preview")}
          className={`px-4 py-2 text-white rounded-md transition ${mode === "preview" ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
            }`}
        >
          Preview Mode
        </button>
      </div>

      {/* Components */}
      <div className="flex flex-col gap-6 items-center w-full max-w-4xl">
        {mode === "edit" && (
          <div className="w-full">
            <ThemeSelector />
          </div>
        )}
        <div className="w-full">
          {mode === "edit" ? (
            <EditMode />
          ) : (
            <PreviewMode />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
