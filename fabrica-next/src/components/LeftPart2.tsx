import styles from '../styles/components/LeftPart2.module.css';
import Link from 'next/link';

export function LeftPart2(){
    return(
        <div className={styles.leftPartFirst2}>

            <section id={styles.containerNavMenu}>
                <div className={styles.StylesStrong}>
                    <strong>Implementações</strong>
                </div>
                <div>
                    <ul className={styles.StylesUl}>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>teste</li>
                        <li><a href="../pages/teste">teste</a></li>

                    </ul>
                </div>
            </section>

            <div className="dropdown" id={styles.divlista}>
                <button className="btn btn-secondary dropdown-toggle" id= {styles.tamanhoBotao} type="button"  data-bs-toggle="dropdown" aria-expanded="false">
                   Implementações
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id={styles.localizacaoDaLista}>
                    <Link href="https://www.youtube.com/">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                    </Link>
                    <Link href="">
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                    </Link>
                    <Link href="">
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </Link>
                </ul>
            </div>

        </div>
    );
}