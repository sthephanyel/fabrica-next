import styles from '../styles/components/ExperienceBar.module.css';
// Para utilizar o css especifico do module, é necesspario importa a pasta
// e para utilizar usar entre chaves com o nome do import e o ID do css
export function ExperienceBar(){
    //a nomenclatura dos componentes precisa ser dessa forma para que seja possivel 
    //exporta caso necessário
    return(
        <div className={styles.experienceBar}>
            <span>@ xp</span>
            <div>
                <div style={{width:'50%'}}>
                    <span className={styles.currentExperience} style={{left:'50%'}}>
                        300xp
                    </span>
                </div>
            </div>
            <span>600 xp</span>
        </div>
    );
}