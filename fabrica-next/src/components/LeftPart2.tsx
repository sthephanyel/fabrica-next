import styles from '../styles/components/LeftPart2.module.css';

export function LeftPart2(){
    return(
        <div className={styles.leftPartFirst2}>

            <section>
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









            
            {/* <select class="form-select" size="10" style={{overflow:'auto'}} aria-label="size 3 select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="3">Three</option>
                <option value='4'>teste</option>
            </select> */}
        </div>
    );
}