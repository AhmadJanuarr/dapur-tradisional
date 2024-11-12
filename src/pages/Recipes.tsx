import RecipeCard from "../components/Card/RecipeCard"

export default function Recipes() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
        <div className="py-10">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold">Resep Makanan Ringan Khas Daerah</h1>
            <p className="mt-2">
              Jelajahi kekayaan kuliner Indonesia melalui berbagai makanan ringan khas daerah yang penuh cita rasa dan
              keunikan.
            </p>
          </div>
        </div>
        <div className="w-full">
          <RecipeCard />
        </div>
      </div>
    </div>
  )
}
