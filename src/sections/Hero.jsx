export default function Hero() {
  return (
    <>
      <header>
        <div className="bg-[url('./assets/hero.jpg')] bg-cover bg-center h-screen grid grid-rows-2 grid-cols-2 max-lg:flex max-lg:justify-center max-md:items-center">
          <div className="text-[#c8c2c4] font-playfair justify-self-end self-end max-lg:self-center max-lg:justify-self-center">
            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl font-normal mr-28 mb-4 leading-tight">
              Some people talk about <br />
              Saving the world. <br />
              Some act
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}
