import {useRouter} from 'next/router'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from "../styles/Home.module.css";


export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className={styles.home} >
        <h1>Pet Shop Markes</h1>

        <button 
          type="button"
          onClick={()=> router.push('/create')}
        >
          Cadastrar Pet
        </button>
        <button
          type="button"
          onClick={()=> router.push('/read')}
        >
          Visualizar Pets
        </button>
      </div>              
    </>
  )
}
