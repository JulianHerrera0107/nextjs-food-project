
export default function MealsDetailsPage({ params }) {
  return (
    <section>
        <h1>Detalles del Platillo</h1>
        <p>Seleccionaste {params.mealSlug}</p>
    </section>
  )
}
