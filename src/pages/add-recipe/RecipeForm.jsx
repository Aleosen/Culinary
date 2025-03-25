import { useState } from "react";
import TipTapRedactor from "../../components/ui/Redactor/TipTapRedactor";
import { useForm, Controller } from 'react-hook-form';

export default function RecipeForm() {
  const { control, handleSubmit, register, formState: { errors } } = useForm();
  const [preview, setPreview] = useState("");

  const validTypes = ["image/jpeg", "image/png"];
  const maxSize = 5 * 1024 * 1024;

  const handleFileChange = (e, onChange) => {
    const file = e.target.files[0];
    if (!file) return;

    // Валидация
    if (!validTypes.includes(file.type)) {
      e.target.value = "";
      return alert("Недопустимый формат");
    }

    if (file.size > maxSize) {
      e.target.value = "";
      return alert("Файл слишком большой");
    }

    // Для превью
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }

    // Передаем файл в react-hook-form
    onChange(file);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Здесь обработка отправки формы
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-3xl mx-auto shadow-lg p-2 lg:p-20">
      <h1 className="text-3xl mb-5">Добавить рецепт</h1>

      {/* Поле названия */}
      <div className="flex flex-col mb-10">
        <label htmlFor="recipeName" className="mb-1">
          Название рецепта<span className="text-red-600">*</span>
        </label>
        <input
          id="recipeName"
          type="text"
          placeholder="Салат цезарь..."
          className="border rounded-lg py-2 px-4"
          {...register("title", { required: "Обязательное поле" })}
        />
        {errors.title && (
          <span className="text-red-600 text-sm">{errors.title.message}</span>
        )}
      </div>

      {/* Поле загрузки файла */}
      <div className="mb-10">
        <label className="mb-1">
          Фотография блюда<span className="text-red-600">*</span>
        </label>
        <Controller
          name="image"
          control={control}
          rules={{ required: "Загрузите изображение" }}
          render={({ field, fieldState }) => (
            <div className="border border-dashed min-h-32 p-10 rounded-2xl flex flex-col items-center justify-center">
              <div className="ml-13">
                <label htmlFor="upload" className="cursor-pointer mr-2">
                  📷
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="upload"
                  className="hover:cursor-pointer"
                  onChange={(e) => handleFileChange(e, field.onChange)}
                />
              </div>
              {fieldState.error && (
                <span className="text-red-600 text-sm">
                  {fieldState.error.message}
                </span>
              )}
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-4 max-w-[300px] rounded-xl border border-black"
                />
              )}
            </div>
          )}
        />
      </div>

      {/* Редактор */}
      <div className="mb-10">
        <label className="mb-1">
          Описание рецепта<span className="text-red-600">*</span>
        </label>
        <Controller
          name="content"
          control={control}
          rules={{ required: "Введите описание рецепта" }}
          render={({ field, fieldState }) => (
            <>
              <TipTapRedactor
                value={field.value}
                onChange={field.onChange}
              />
              {fieldState.error && (
                <span className="text-red-600 text-sm">
                  {fieldState.error.message}
                </span>
              )}
            </>
          )}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Опубликовать рецепт 🍳
      </button>
    </form>
  );
}