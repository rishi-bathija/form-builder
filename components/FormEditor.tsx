"use client";
import React, { useState, useContext } from "react";
import { FormContext, FormField } from "../context/FormContext";

const EditMode: React.FC = () => {
    const { formFields, setFormFields } = useContext(FormContext)!;
    const [newField, setNewField] = useState<Omit<FormField, "id">>({
        label: "",
        type: "text",
        required: false,
        options: [],
    });
    const [newOption, setNewOption] = useState("");

    const addField = () => {
        if (!newField.label.trim()) return;
        setFormFields([
            ...formFields,
            { ...newField, id: Date.now().toString() },
        ]);
        setNewField({ label: "", type: "text", required: false, options: [] });
    };

    const deleteField = (id: string) => {
        setFormFields(formFields.filter((field) => field.id !== id));
    };

    const addOption = () => {
        if (!newOption.trim()) return;
        setNewField((prev) => ({
            ...prev,
            options: [...(prev.options || []), newOption],
        }));
        setNewOption("");
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Mode</h2>
            <div className="space-y-4">
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Field Label"
                        value={newField.label}
                        onChange={(e) =>
                            setNewField((prev) => ({ ...prev, label: e.target.value }))
                        }
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    <select
                        value={newField.type}
                        onChange={(e) =>
                            setNewField((prev) => ({
                                ...prev,
                                type: e.target.value as FormField["type"],
                            }))
                        }
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                    >
                        <option value="text">Text</option>
                        <option value="checkbox">Checkbox</option>
                        <option value="select">Select</option>
                        <option value="radio">Radio</option>
                        <option value="textarea">Textarea</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                    </select>
                </div>
                {["select", "radio"].includes(newField.type) && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Add Option"
                                value={newOption}
                                onChange={(e) => setNewOption(e.target.value)}
                                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                            />
                            <button
                                onClick={addOption}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Add Option
                            </button>
                        </div>
                        <ul className="space-y-1">
                            {newField.options?.map((option, index) => (
                                <li
                                    key={index}
                                    className="text-gray-600 text-sm italic pl-4 list-disc"
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button
                    onClick={addField}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                >
                    Add Field
                </button>
            </div>
            <ul className="mt-6 space-y-4">
                {formFields.map((field) => (
                    <li
                        key={field.id}
                        className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
                    >
                        <span className="text-gray-700 font-medium">{field.label}</span>
                        <button
                            onClick={() => deleteField(field.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EditMode;
