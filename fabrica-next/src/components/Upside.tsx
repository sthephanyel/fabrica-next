import styles from '../styles/components/Upside.module.css';

export function Upside(){
    return(
        <div className={styles.UpsideFisrt}>
            <section>
                <div className={styles.distanciamentoDiv}>
                    <img className={styles.mobileTamanho} src="fabrica704.jpg" alt="fabrica"/>
                </div>
                <div>
                    
                </div>
                <strong><a href="#">O que é ?</a></strong>
                <strong>Como Funciona</strong>
                <strong>Conheça</strong>
            </section>
        </div>
    );
}