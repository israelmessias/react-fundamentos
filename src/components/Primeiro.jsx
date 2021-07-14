export default function Primeiro(props) {
  let aluno = props.aluno;
  let nota = props.nota;

  return (
    <div>
      {aluno}
      {nota}
      <p>
        Parabens {aluno} sua nota {nota}
      </p>
    </div>
  );
}
