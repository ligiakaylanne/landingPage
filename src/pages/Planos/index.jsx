export default function Planos(){
  return(
    <>
      <section className="flex flex-col items-center justify-center mt-[80px]">
        <h2 className="font-[600] text-[28px] text-[#233E99BF]">Conheça nossos planos</h2>
        <p className="text-[#505050]">Planos que cabem no seu bolso</p>
      </section>
      <section className="flex flex-row flex-wrap items-center justify-center gap-[40px] text-[#505050] mt-[80px] ml-[10px] mr-[10px]">
        <div className="w-[331px] border rounded-[8px] text-center pt-[20px]">
          <p className="font-[600] text-[28px] text-[#b59788]">Mensal</p>
          <p className="font-[600] text-[38px]">R$ 180,00</p>
          <figure className="flex flex-row items-center gap-[10px] ml-[20px] mt-[10px] mb-[15px]">
            <img
              className="w-[18px]"
              src="./assets/check-icon.png" 
              alt="check icon"
            />
            <figcaption>1x por semana</figcaption>
          </figure>
          <div className="w-full h-[111px] flex flex-col items-center justify-center bg-[#f8af9c] border-[none] rounded-bl-[7px] rounded-br-[7px]">
            <button 
              className="w-[266px] h-[48px] bg-[#ed957e] border-[#f1896e] rounded-[8px] font-[500] text-[#ffffff]"
            >
              Agendar avaliação
            </button>
          </div>
        </div>
        <div className="w-[331px] border rounded-[8px] text-center pt-[20px]">
          <p className="font-[600] text-[28px] text-[#b59788]">Mensal</p>
          <p className="font-[600] text-[38px]">R$ 230,00</p>
          <figure className="flex flex-row items-center gap-[10px] ml-[20px] mt-[10px] mb-[15px]">
            <img
              className="w-[18px]"
              src="./assets/check-icon.png" 
              alt="check icon"
            />
            <figcaption>2x por semana</figcaption>
          </figure>
          <div className="w-full h-[111px] flex flex-col items-center justify-center bg-[#f8af9c] border-[none] rounded-bl-[7px] rounded-br-[7px]">
            <button 
              className="w-[266px] h-[48px] bg-[#ed957e] border-[#f1896e] rounded-[8px] font-[500] text-[#ffffff]"
            >
              Agendar avaliação
            </button>
          </div>
        </div>
        <div className="w-[331px] border rounded-[8px] text-center pt-[20px]">
          <p className="font-[600] text-[28px] text-[#b59788]">Mensal</p>
          <p className="font-[600] text-[38px]">R$ 300,00</p>
          <figure className="flex flex-row items-center gap-[10px] ml-[20px] mt-[10px] mb-[15px]">
            <img
              className="w-[18px]"
              src="./assets/check-icon.png" 
              alt="check icon"
            />
            <figcaption>3x por semana</figcaption>
          </figure>
          <div className="w-full h-[111px] flex flex-col items-center justify-center bg-[#f8af9c] border-[none] rounded-bl-[7px] rounded-br-[7px]">
            <button 
              className="w-[266px] h-[48px] bg-[#ed957e] border-[#f1896e] rounded-[8px] font-[500] text-[#ffffff]"
            >
              Agendar avaliação
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/*
#f8af9c fora bt
#f1896e borda bt
#ed957e dentro bt
#505050 text
#b59788 text laranja
*/