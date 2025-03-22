import React from 'react'

export default function Prototype() {
  return (
    <form className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
  {/* 1. Заголовок */}
  <h2 className="text-3xl font-bold mb-8">Добавить новый рецепт</h2>

  {/* 2. Основная информация */}
  <div className="space-y-6">
    {/* Название */}
    <div>
      <label className="block text-lg font-medium mb-2">Название рецепта *</label>
      <input 
        type="text" 
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
        placeholder="Сырники с ягодным соусом"
      />
    </div>

    {/* Описание */}
    <div>
      <label className="block text-lg font-medium mb-2">Краткое описание</label>
      <textarea 
        className="w-full p-3 border rounded-lg h-32"
        placeholder="Идеальный завтрак для всей семьи..."
      />
    </div>

    {/* 3. Медиа */}
    <div>
      <label className="block text-lg font-medium mb-2">Фотография блюда *</label>
      <div className="border-2 border-dashed rounded-lg p-8 text-center">
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          id="upload-photo"
        />
        <label 
          htmlFor="upload-photo" 
          className="cursor-pointer inline-block p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          📷 Загрузить фото
        </label>
        <p className="mt-2 text-gray-500">Макс. размер: 5MB</p>
      </div>
    </div>

    {/* 4. Ингредиенты (динамическое добавление) */}
    <div>
      <label className="block text-lg font-medium mb-2">Ингредиенты *</label>
      <div className="space-y-3">
        {/* Динамические поля — пример реализации через state */}
        {[''].map((ing, index) => (
          <div key={index} className="flex gap-3">
            <input
              type="text"
              placeholder="Например: Мука"
              className="flex-1 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="200 г"
              className="w-24 p-2 border rounded"
            />
            <button 
              type="button"
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
        <button 
          type="button" 
          className="text-orange-500 hover:text-orange-700 flex items-center gap-1"
        >
          ➕ Добавить ингредиент
        </button>
      </div>
    </div>

    {/* 5. Шаги приготовления */}
    <div>
      <label className="block text-lg font-medium mb-2">Пошаговый рецепт *</label>
      {[''].map((step, index) => (
        <div key={index} className="mb-4 flex gap-3">
          <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
            {index + 1}
          </span>
          <textarea 
            className="flex-1 p-3 border rounded-lg"
            placeholder="Опишите шаг подробно..."
          />
        </div>
      ))}
      <button 
        type="button" 
        className="text-orange-500 hover:text-orange-700"
      >
        ➕ Добавить шаг
      </button>
    </div>

    {/* 6. Дополнительные параметры */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">Время готовки</label>
        <input 
          type="number" 
          className="w-full p-2 border rounded"
          placeholder="30 мин"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Категория</label>
        <select className="w-full p-2 border rounded">
          <option>Завтраки</option>
          <option>Основные блюда</option>
          <option>Десерты</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Сложность</label>
        <select className="w-full p-2 border rounded">
          <option>Легко</option>
          <option>Средне</option>
          <option>Сложно</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Порции</label>
        <input 
          type="number" 
          className="w-full p-2 border rounded"
          placeholder="4"
        />
      </div>
    </div>

    {/* 7. Теги */}
    <div>
      <label className="block text-lg font-medium mb-2">Теги</label>
      <div className="flex flex-wrap gap-2">
        {['вегетарианское', 'постное'].map(tag => (
          <label key={tag} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded">
            <input type="checkbox" className="accent-orange-500"/>
            {tag}
          </label>
        ))}
      </div>
    </div>

    {/* 8. Кнопка отправки */}
    <button 
      type="submit"
      className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
    >
      Опубликовать рецепт 🍳
    </button>
  </div>
</form>
  )
}
