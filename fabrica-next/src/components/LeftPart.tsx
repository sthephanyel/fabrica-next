import styles from '../styles/components/LeftPart.module.css';

export function LeftPart(){
    return(
        <div className={styles.leftPartFirst}>
            <section>
                <div className={styles.StylesStrong}>
                    <strong >Produtos</strong>
                </div>
                <div>
                    <ul className={styles.StylesUl}>
                        <div><li>Mobilidade</li></div>
                        <div><li>Delivery</li></div>
                        <div><li>ZappPedis</li></div>
                        
                    </ul>
                    <div className={styles.clear}></div>
                </div>
            </section>
        </div>
        
    );
}