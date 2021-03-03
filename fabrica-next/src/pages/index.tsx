import {ExperienceBar} from '../components/ExperienceBar'
//Para utilizar um componente na pagina principal, é necessário importa seu dominio, utilizando essa nomenclatura
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Upside } from '../components/Upside';
import { LeftPart } from '../components/LeftPart';
import { RightPart } from '../components/RightPart';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio / move.it</title>
      </Head>
    <div>
      {/* Parte de cima do site */}
      <Upside></Upside>
    </div>
    {/* Parte do lado esquerdo e direito */}
    <section>
      <div >
      <LeftPart></LeftPart>
    </div>
    <div>
      <RightPart></RightPart>
    </div>
    </section>
    








      {/* <ExperienceBar/>
      <section>
        <div>
          <CompletedChallenges></CompletedChallenges>
        </div>
      </section> */}
    </div>
  )
}
