import styles from '../styles/components/LeftPart.module.css';
import { useState } from 'react';
import Link from 'next/link';

const customHandleClick = () => console.log('Free pizza!')

export function LeftPart(){
    return(
        
        
        <div className={styles.leftPartFirst} >

            {/* <i className="material-icons" id="openMenu" onClick={customHandleClick}>menu</i> */}
            <nav id={styles.containerNavMenu}>
                <section>

                    <div className={styles.StylesStrong}>
                        <strong >Produtos</strong>
                    </div>
                    <div >
                        <div>
                            <ul className={styles.StylesUl}>
                                <div><li>Mobilidade</li></div>
                                <div><li>Delivery</li></div>
                                <div><li>ZappPedis</li></div>
                                
                            </ul>
                        </div>
                    </div>
                    
                </section>
        
            </nav>
            {/* fazer um estilo onde esse drop só aparece se a tela atingir um determinado tamanho
            Deve ficar na parte superios, e a tela do conteudo abaixo */}

            <div className="dropdown" id={styles.divlista}>
                <button className="btn btn-secondary dropdown-toggle" id= {styles.tamanhoBotao} type="button"  data-bs-toggle="dropdown" aria-expanded="false">
                    Produtos
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id={styles.localizacaoDaLista}>
                    <Link href="https://www.youtube.com/">
                        <li><a className="dropdown-item" href="#">Mobilidade</a></li>
                    </Link>
                    <Link href="">
                        <li><a className="dropdown-item" href="#">Delivery</a></li>
                    </Link>
                    <Link href="">
                        <li><a className="dropdown-item" href="#">ZappPedis</a></li>
                    </Link>
                </ul>
            </div>
        
        </div>
        
    );
}