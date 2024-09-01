import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CategoriaModal, Calendario, EditorContenido } from "../components";

function CrearNoticia() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categorias] = useState(["Tecnología", "Economía"]);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Limpiar el formulario después de enviarlo
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <button
          onClick={() => navigate("/noticias")}
          className="mb-4 text-blue-500 hover:underline"
        >
          &larr; Volver al listado de noticias
        </button>
        <h2 className="text-2xl font-bold mb-6">Crear Noticia</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Fecha de Publicación
            </label>
            <Calendario control={control} />
            {errors.publishDate && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Creado Por</label>
            <input
              type="text"
              {...register("author", { required: true })}
              className="w-full p-2 mt-1 border rounded"
            />
            {errors.author && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Título</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full p-2 mt-1 border rounded"
            />
            {errors.title && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Categoría</label>
            <div className="flex">
              <select
                {...register("category", { required: true })}
                className="w-full p-2 mt-1 border rounded"
              >
                <option value="">Seleccione una categoría</option>
                {categorias.map((categoria, index) => (
                  <option key={index} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={openModal}
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Agregar Categoría
              </button>
            </div>
            {errors.category && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700">Contenido</label>
            <textarea
              {...register("content", { required: true })}
              className="w-full p-2 mt-1 border rounded"
            />
            {errors.content && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Contenido
            </label>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <EditorContenido
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.content && (
              <span className="text-red-500">El contenido es obligatorio</span>
            )}
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700">Fecha de Publicación</label>
            <input
              type="date"
              {...register("publishDate", { required: true })}
              className="w-full p-2 mt-1 border rounded"
            />
            {errors.publishDate && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div> */}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Crear Noticia
          </button>
        </form>
      </div>
      {isModalOpen && <CategoriaModal closeModal={closeModal} />}
    </div>
  );
}

export default CrearNoticia;
