import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const TarjetaNoticia = ({ noticia }) => {
  const { titulo, categoria, contenido, fechaPublicacion, autor } = noticia;
  const onEdit = (e) => {};
  const onDelete = (e) => {};
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {titulo} categoria,
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
          >
            <FaEdit />
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-2">{categoria}</p>
      <p className="text-gray-600 mb-2">{contenido}</p>
      <div className="text-sm text-gray-500">
        <span>{autor}</span> • <span>{fechaPublicacion}</span>
      </div>
    </div>
  );
};
