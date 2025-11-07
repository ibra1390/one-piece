import { useState } from "react";

export default function CategoryButtons({ onCategoryChange }) {
    const [activeCategory, setActiveCategory] = useState("characters");

    const handleClick = (category) => {
        setActiveCategory(category);
        onCategoryChange(category);
    };

    const buttonClasses = (category) =>
        `px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${activeCategory === category
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`;

    return (
        <div className="flex justify-center gap-4 mb-4">
            <button
                onClick={() => handleClick("characters")}
                className={buttonClasses("characters")}
            >
                Characters
            </button>

            <button
                onClick={() => handleClick("boats")}
                className={buttonClasses("boats")}
            >
                Boats
            </button>

            <button
                onClick={() => handleClick("crew")}
                className={buttonClasses("crew")}
            >
                Crew
            </button>
        </div>
    );
}
