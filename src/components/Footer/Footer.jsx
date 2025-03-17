export default function Footer(){
  return(
    <>
      <footer className="mt-[80px] mr-[15px] mb-[20px] ml-[15px]">
        <section className="mb-[5px] hidden sm:block">
          <img 
            className="w-[100]"
            src="./assets/logo.png"
            alt=""
          />
        </section>
        <section className="flex flex-row flex-wrap gap-[15px] md:gap-[60px] items-center justify-center sm:justify-start">
          <div>
            <p>Funding freemium long tail hypotheses</p>
            <p>first mover advantage assets ownership</p>
          </div>
          <div className="flex flex-row gap-[10px]">
            <img
              className="w-[24px]"
              src="./assets/icon-email.png"
              alt=""
            />
            <p>pilates@mail.com</p>
          </div>
          <div className="flex flex-row gap-[10px]">
            <img
              className="w-[24px]"
              src="./assets/icon-telefone.png"
              alt=""
            />
            <p>+ 12 3456 7890</p>
          </div>
        </section>
      </footer>
    </>
  );
}