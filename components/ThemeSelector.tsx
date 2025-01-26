import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const ThemeSelector: React.FC = () => {
    const { theme, setTheme } = useContext(FormContext)!;

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Theme Selector</h2>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-600" htmlFor="color-picker">
                        Color:
                    </label>
                    <input
                        id="color-picker"
                        type="color"
                        className="w-10 h-10 p-0 border rounded-md"
                        value={theme.color}
                        onChange={(e) => setTheme({ ...theme, color: e.target.value })}
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-600" htmlFor="font-size-input">
                        Font Size:
                    </label>
                    <input
                        id="font-size-input"
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={parseInt(theme.fontSize, 10)}
                        onChange={(e) =>
                            setTheme({ ...theme, fontSize: `${e.target.value}px` })
                        }
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-600" htmlFor="font-family-select">
                        Font Family:
                    </label>
                    <select
                        id="font-family-select"
                        className="p-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={theme.fontFamily}
                        onChange={(e) => setTheme({ ...theme, fontFamily: e.target.value })}
                    >
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ThemeSelector;
