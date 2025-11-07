import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="text-center my-4">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Buscar por nombre..."
                className="w-4/5 max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
}
