//Para utilizar um componente na pagina principal, é necessário importa seu dominio, utilizando essa nomenclatura
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';
import { Upside } from '../components/Upside';
import { LeftPart } from '../components/LeftPart';
import { LeftPart2 } from '../components/LeftPart2';
import { RightPart } from '../components/RightPart';
import teste  from  './teste';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Fabrica 704</title>
        
      </Head>
    <div>
      {/* Parte de cima do site */}
      <Upside></Upside>
    </div>

    <div className="container-fluid" style={{background:'red'}}>
    {/* Parte do lado esquerdo e direito */}
      <section className={styles.alinhando} >
          <div>
            <div className="container">
              <LeftPart></LeftPart>  
            </div>
            <div className="container">
              <LeftPart2></LeftPart2>
            </div>
          </div>

          <div className="container" style={{marginTop:'10px'}}>
            <RightPart></RightPart>      
          </div>
      </section>
    </div>
  


      {/* <ExperienceBar/>
      <section>
        <div>
          <CompletedChallenges></CompletedChallenges>
        </div>
      </section> */}
    </div>
  )
}
