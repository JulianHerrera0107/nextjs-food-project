import Link from "next/link"
import Image from "next/image"
import logoImg from "@/src/assets/logo.png"
import styles from "@/src/components/main-header/main-header.module.css"
import MainHeaderBackground from "@/src/components/main-header/main-header-background";
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image
                        src={logoImg}
                        alt="Un plato con comida alrededor"
                        priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <>
                            <il>
                                <Link href="/meals">Buscar Platillos</Link>
                            </il>
                            <il>
                                <Link href="/community">Comunidad de Foodies</Link>
                            </il>
                        </>
                    </ul>
                </nav>
            </header>
        </>
    )
}
