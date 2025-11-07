import React, { useEffect } from "react";
import useFetchOnePiece from "./useFetchOnePiece";

export default function Modal({ character, onClose }) {
  const modalRef = useFetchOnePiece();

  useEffect(() => {
    function cerrarModal(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", cerrarModal);
    return () => document.removeEventListener("mousedown", cerrarModal);
  }, [onClose]);

  if (!character) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-2xl shadow-lg w-96 max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600"
        >
          X
        </button>

        /* <img
          src={character.filename}
          alt={character.name}
          className="w-full rounded-xl mb-4"
        /> */
        <h2 className="text-2xl font-bold mb-2">{character.crew.name}</h2>
        <p className="text-gray-600 text-sm mb-2">
          {character.job || "Sin ocupación registrada"}
        </p>
        <p className="text-gray-700">
          <strong>Fruta: </strong> {character.fruit.name || "Desconocido"}
        </p>
        <p className="text-gray-700 mt-1">
          <strong>Recompensa: </strong> {character.bounty || "N/A"}
        </p>
      </div>
    </div>
  );
}
