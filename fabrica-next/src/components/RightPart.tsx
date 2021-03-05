import styles from '../styles/components/RightPart.module.css';
import 'bootstrap/dist/css/bootstrap.css';

export function RightPart(){
    return(
        <div className={styles.RightPartFisrt}>
            <p>teste</p>
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
        
    );
}