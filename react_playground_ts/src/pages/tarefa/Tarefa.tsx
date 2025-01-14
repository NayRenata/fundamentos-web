import { useEffect, useState } from 'react';

function Tarefa() {

    const[completed, setCompleted] = useState(false);
    const[tarefa, setTarefa] = useState('');


    useEffect(()=> {
      if(completed){
        setTarefa('Parabéns!Você concliu a tarefa!');
      }else{
        setTarefa('Opa!Voce não concluiu a tarefa!')
      }
    },[completed]);

  return (
    <>
      <h3>Componente Tarefa</h3>
      <h4>{tarefa}</h4>
      
      {completed ? (
        <p>Conclua a tarefa</p>
      ) : (
        <p>Revise o conteúdo</p>
      )}

      <button onClick={()=> setCompleted(v => !v)}>Concluir tarefa!</button>

      
    
    </>
  )
}

export default Tarefa

