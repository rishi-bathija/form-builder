"use client";
import React, { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

const PreviewMode: React.FC = () => {
    const { formFields, theme } = useContext(FormContext)!;
    const [formData, setFormData] = useState<{ [key: string]: string | boolean }>(
        {}
    );
    const [submittedData, setSubmittedData] = useState<
        { [key: string]: string | boolean } | null
    >(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Show submitted data and reset form
        setSubmittedData(formData);
        setIsSubmitted(true);

        // Reset the form data
        setFormData({});
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setSubmittedData(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
                {!isSubmitted ? (
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        style={{
                            color: theme.color,
                            fontFamily: theme.fontFamily,
                            fontSize: theme.fontSize,
                        }}
                    >
                        <h1 className="text-2xl font-semibold text-gray-800 text-center">
                            Fill the Form
                        </h1>
                        {formFields.map((field) => (
                            <div key={field.id} className="flex flex-col space-y-1">
                                <label className="text-sm font-medium text-gray-600">
                                    {field.label}
                                </label>
                                {field.type === "text" && (
                                    <input
                                        type="text"
                                        value={formData[field.id] as string || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field.id]: e.target.value,
                                            })
                                        }
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                )}
                                {field.type === "checkbox" && (
                                    <input
                                        type="checkbox"
                                        checked={formData[field.id] as boolean || false}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field.id]: e.target.checked,
                                            })
                                        }
                                        className="h-5 w-5 text-blue-600 border-gray-300 rounded"
                                    />
                                )}
                                {field.type === "select" && field.options && (
                                    <select
                                        value={formData[field.id] as string || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field.id]: e.target.value,
                                            })
                                        }
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select an option</option>
                                        {field.options.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                {field.type === "radio" && field.options && (
                                    field.options.map((option, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name={field.id}
                                                value={option}
                                                checked={formData[field.id] === option}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        [field.id]: e.target.value,
                                                    })
                                                }
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                            />
                                            <label className="text-sm font-medium text-gray-600">
                                                {option}
                                            </label>
                                        </div>
                                    ))
                                )}
                                {field.type === "textarea" && (
                                    <textarea
                                        value={formData[field.id] as string || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field.id]: e.target.value,
                                            })
                                        }
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                )}
                                {field.type === "number" && (
                                    <input
                                        type="number"
                                        value={formData[field.id] as string || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field.id]: e.target.value,
                                            })
                                        }
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                )}
                                {field.type === "date" && (
                                    <input
                                        type="date"
                                        value={formData[field.id] as string || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                [field.id]: e.target.value,
                                            })
                                        }
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                )}
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-mdfocus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-green-600">
                            Form Submitted Successfully!
                        </h2>
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="font-medium text-gray-700">Submitted Data:</h3>
                            <pre className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-md overflow-x-auto">
                                {JSON.stringify(submittedData, null, 2)}
                            </pre>
                        </div>
                        <button
                            onClick={resetForm}
                            className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            Submit Another Response
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviewMode;
