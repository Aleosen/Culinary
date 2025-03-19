import React from 'react'

export default function RecipesResult() {
  return (
    <main className="min-h-screen flex-1">
    {/* Сортировка + количество */}
    {/* Сетка рецептов */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Карточки */}
    </div>

    {/* Пагинация */}
    <div className="mt-8 flex justify-center gap-2">
      <button className="px-4 py-2 bg-gray-100 rounded">1</button>
      <button className="px-4 py-2 hover:bg-gray-100 rounded">2</button>
      <span className="px-4 py-2">...</span>
    </div>
  </main>
  )
}
