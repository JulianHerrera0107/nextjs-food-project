import Link from "next/link"
export default function MealsPage() {
  return (
    <section>
        <h1>Página de Comidas</h1>
        <p><Link href="/meals/hamburguesa">Hamburguesa</Link></p>
        <p><Link href="/meals/dumplings">Dumplings</Link></p>
        <p><Link href="/meals/pizza">Pizza</Link></p>
        <Link href="/meals/share">Compartir Tus Comidas Favoritas</Link>
    </section>
  )
}
