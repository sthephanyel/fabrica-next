import {ExperienceBar} from '../components/ExperienceBar'
//Para utilizar um componente na pagina principal, é necessário importa seu dominio, utilizando essa nomenclatura
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head'
import { CompletedChallenges } from '../components/CompletedChallenges';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio / move.it</title>
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <CompletedChallenges></CompletedChallenges>
        </div>
      </section>
    </div>
  )
}
