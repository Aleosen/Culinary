import { useState } from "react";
import TipTapRedactor from "../../components/ui/Redactor/TipTapRedactor";

export default function RecipeForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");
  // Допустимые типы и максимальный размер (5 МБ)
  const validTypes = ["image/jpeg", "image/png", "application/pdf"];
  const maxSize = 5 * 1024 * 1024; // 5 МБ в байтах

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setError("Файл не выбран");
      return;
    }

    // Проверка типа файла
    if (!validTypes.includes(selectedFile.type)) {
      setError("Недопустимый формат. Разрешены: JPEG, PNG, PDF");
      e.target.value = ""; // Сброс выбора
      return;
    }

    // Проверка размера
    if (selectedFile.size > maxSize) {
      setError("Файл слишком большой (макс. 5 МБ)");
      e.target.value = "";
      return;
    }
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        setPreview("");
      }
    // Если все проверки пройдены
    setError("");
    setFile(selectedFile);
  };
  const handleSubmit = () => {
    console.log('submit')
  }
  return (
    <form 
    onSubmit={handleSubmit}
    className="lg:w-3xl mx-auto shadow-lg p-2 lg:p-20">
        <h1 className="text-3xl mb-5">Добавить рецепт</h1>
        <div className="flex flex-col mb-10">
            <label htmlFor="recipeName" className="mb-1">Название рецепта<span className="text-red-600">*</span></label>
            <input id='recipeName' type="text" placeholder="Салат цезарь..." className="border rounded-lg py-2 px-4"/>
        </div>
        <div className="flex flex-col mb-10">
            <label htmlFor="recipeDesc" className="mb-1">Краткое описание</label>
            <textarea id='recipeDesc' placeholder="Идеальный перекус. Вкусный, сытный салат..." className="border rounded-lg py-2 px-4 h-32"/>
        </div>
        <div className=" mb-10">
            <label htmlFor="recipeDesc" className="mb-1">Фотография блюда<span className="text-red-600">*</span></label>
            <div className="border border-dashed min-h-32 p-10 rounded-2xl flex flex-col items-center justify-center">
                <div className="ml-13">
                <label htmlFor="upload" className="cursor-pointer mr-2">📷</label>
                <input 
                type="file" 
                accept="image/*"
                id='upload'
                className="hover:cursor-pointer"
                required
                onChange={handleFileChange}
                placeholder=""
                />
                </div>
                {error && <div style={{ color: "red" }}>{error}</div>}
                {file && (
                <div>
                    <p>Выбран файл: {file.name}</p>
                    <p>Размер: {(file.size / 1024 / 1024).toFixed(2)} МБ</p>
                </div>
                )}
            </div>
            {preview && <img src={preview} alt="Preview" style={{ maxWidth: "300px", marginTop: "20px", borderRadius: "20px", border: "1px solid black"}} />}
        </div>
        <div className="mb-10">
        <label className="mb-1">Описание рецепта<span className="text-red-600">*</span></label>
        <TipTapRedactor/>
      </div>
      <button 
      type="submit"
      className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
    >
      Опубликовать рецепт 🍳
    </button>
    </form>
  )
}
