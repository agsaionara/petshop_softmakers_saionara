
import { FormEvent, useState,useEffect, useContext} from 'react'
import {useRouter} from 'next/router'

import styles from "../styles/Create.module.css";
import api from '../services/api';

interface Pet{
  id: number;
	nome: string;
	idade: string;
	tipo: string;
  raca: string;
	donoPet: string;
	telefoneDonoPet: string;
}

export default function Update() {
  const router = useRouter();

  const {query} = useRouter();

  const id = query.id;

  console.log(id)

  const valorInicial 
  = {
    nome: "",
    idade: "",
    tipo: "",
    raca:"",
    donoPet: "",
    telefoneDonoPet: "",
  }

  const [valor, setValor] = useState(valorInicial);
  console.log(valor)

  function handleChange(event: any){
    const {name, value} = event.target;

    setValor({ ...valor, [name]:value})

    console.log(valor);
  }


  
  async function handleUpdatePet(event: { preventDefault: () => void; },  ) {
    event.preventDefault();   

    await api
        .put(`updatepet/${id}`, valor)  
        .then((resp) => {
          router.push('/read');
          alert("Pet Atualizado com sucesso!")
        })
        .catch((err) =>{
          console.log(err)
          alert("Erro ao atualizar o Pet")
        })
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.toponpage}>
          <h1>PetShop Markes</h1>

          <h3>Atualizar cadastro do Pet</h3>

          <form
            className={styles.formulario}
            onSubmit={handleUpdatePet}
            method="post">

            <div className={styles.wrapper}>
              
                <label htmlFor="nomeDoPet">Nome do Pet:</label>
                
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Coloque o nome do seu pet aqui..."
                  onChange={handleChange}
                />

                <label htmlFor="idadeDoPet">Idade do Pet:</label>
                <input
                  type="text"
                  id="idade"
                  name="idade"
                  placeholder="Ex: 1 ano, 1 mês, 2 ano e 6 meses..."
                  onChange={handleChange}
                />              
              
                <label htmlFor="tipoDePet">Tipo de Pet:</label>
                <input
                  type="text"
                  id="tipo"
                  name="tipo"
                  placeholder="Ex: cachorro, passáros, gato, peixe..."
                  onChange={handleChange}
                />
                          
                <label htmlFor="raca">Raça do Pet:</label>
                <input
                  type="text"
                  id="raca"
                  name="raca"
                  placeholder="Ex: Pastor Alemão, Peixe Gato, Siamês, Canário..."
                  onChange={handleChange}
                />
                           
                <label htmlFor="donodopet">Dono do Pet:</label>
                <input
                  type="text"
                  id="donoPet"
                  name="donoPet"
                  placeholder="Coloque seu nome aqui..."
                  onChange={handleChange}
                />
              
                <label htmlFor="telefone">Telefone do Dono:</label>
                <input
                  type="text"
                  id="telefoneDonoPet"
                  name="telefoneDonoPet"
                  placeholder="Coloque seu telefone aqui..."
                  onChange={handleChange}
                />
              
              <button 
                type="submit"
              >
                Atualizar
              </button>
            </div>
          </form>
        </main>
        
        <div className={styles.footer}>
          <button 
            type="button"
            onClick={()=> router.push('/')}
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={()=> router.push('/read')}
          >
            Visualizar Pets
          </button>
        </div>
        

      </div>
    </>
  )
}
