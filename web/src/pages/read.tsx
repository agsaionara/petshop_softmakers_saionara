import React, { useEffect, useState } from "react";
import api from "../services/api";
import styles from "../styles/Read.module.css";
import {useRouter} from 'next/router';
import { isReturnStatement } from "typescript";
import { request } from "http";

interface Pet{
  id: number;
	nome: string;
	idade: string;
	tipo: string;
  raca: string;
	donoPet: string;
	telefoneDonoPet: string;
}

export default function List() {
  const router = useRouter();

  const [pets, setPets] = useState<Pet[]>([]);

    useEffect(()=>{
      api
        .get("/listpets")
        .then((response) => setPets(response.data))
        .catch((err)=>{
          console.log("Ops! Ocorreu um erro\n" + err);
        })
    }, []);


    function deletePet(petID:Number) {
      api
        .delete(`deletepet/${petID}`)
        .then((response)=> {
          alert("Pet com id: " + petID+ ", foi deletado");
          router.push('/create');         
        })
        .catch((err) =>{
          console.log(err)
          alert("Erro ao EXCLUIR o Pet com ID: "+ petID)
        })
    }

    function updatePet(petID:Number) { 
      router.push('/'); 
      alert("A pagina não atualiza do pet. Favor retornar a pagina principal. Animal selecionado com id: " + petID)
      
    }
    
  return (
    <>
      <main className={styles.home}>
        <h1>Pet Shop Markes</h1>
        <h2>Listagem dos Pets</h2>

        <div>
          <table className={styles.table}>
            <tr className={styles.headTable}>
              <th>Nome</th>
              <th>Idade</th>
              <th>Tipo</th>
              <th>Raça</th>
              <th>Dono do Pet</th>
              <th>Telefone do Dono do Pet</th>
              <th>Ações</th>
            </tr>
            {pets.map(pet =>{
              return(
                <tr key={pet.id}>
                  <td>{pet.nome}</td>
                  <td>{pet.idade}</td>
                  <td>{pet.tipo}</td>
                  <td>{pet.raca}</td>
                  <td>{pet.donoPet}</td>
                  <td>{pet.telefoneDonoPet}</td>
                  <td>
                    <button className={styles.update} onClick={()=> updatePet(pet.id)}>Editar </button> 
                    <button className={styles.delete} onClick={() => deletePet(pet.id)}> Excluir</button>
                  </td> 
                </tr>
              )
            })}
          </table> 

        </div>
        <div className={styles.footer}>
          <button 
            type="button"
            onClick={()=> router.push('/')}
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={()=> router.push('/create')}
          >
            Adicionar novo Pet
          </button>
        </div>
      </main>

    </>
  )
}