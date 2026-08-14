import { PrimeiroComponente } from "./components/PrimeiroComponente";


export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Next.js!</h1>
        <PrimeiroComponente
        mensagem= {"Esta é uma mensagem passada como Propriedadepara o PrimeiroComponente."}
        mensagemBotao= {"Você clicoi no botão!"}
         />
      </main>
    </div>

  );
}