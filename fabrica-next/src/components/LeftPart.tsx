import styles from '../styles/components/LeftPart.module.css';

export function LeftPart(){
    return(
        <div className={styles.leftPartFirst}>
            <p>teste</p>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="card" >
                <button className="btn btn-secondary">Enviar</button>
                    teste

            </div>
        </div>
        
    );
}