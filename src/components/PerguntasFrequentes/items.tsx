interface PerguntasFrequentesProps {
  pergunta: string
  resposta: string[]
  isOpen: boolean
  onToggle: () => void
}

export default function PerguntasFrequentesItem({
  pergunta,
  resposta,
  isOpen,
  onToggle,
}: PerguntasFrequentesProps) {
  return (
    <div
      className={`group border-2 my-0.5 transition-all duration-300 ${
        isOpen
          ? "rounded-[20px] bg-azul-base text-white"
          : "rounded-[40px] bg-white text-azul-base"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-[50px] w-full mx-4 gap-7 items-center text-left py-1 outline-none cursor-pointer font-bold md:tracking-wider leading-[1] text-balance"
      >
        <svg
          className={`max-w-[15px] bg-center bg-no-repeat transition-transform duration-300 ${
            isOpen ? "rotate-45 fill-white" : "rotate-0 fill-azul-base"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 717 715"
        >
          <path d="M438 279h279v159H438v277H279V438H0V279h279V0h159v279z" />
        </svg>
        {pergunta}
      </button>
      <div
        className={`px-5 pb-1 flex-col text-balance overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {resposta.map((resp) => (
          <p className="mb-2 text-balance" key={resp}>
            {resp}
          </p>
        ))}
      </div>
    </div>
  )
}
