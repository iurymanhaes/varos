import React from "react";

export default function Footer() {
  const currentDate = new Date();
  const currentYear: number = currentDate.getFullYear();
  return (
    <footer className="text-greyC1 font-red-hat">
      <div className="grid gap-6 mb-14 lg:grid-cols-[270px,172px,172px,172px,172px] md:grid-cols-4 sm:grid-cols-2">
        <div className="flex flex-col lg:col-span-1 sm:col-span-full xl:order-1 lg:order-1 md:order-1 sm:order-1">
          <div className="w-[74px] h-[74px] flex align-middle justify-center bg-greyC1 rounded-lg">
            <img src="/Logo.svg" alt="Logo" className="h-10 mx-auto my-auto" />
          </div>
          <div className="w-[74px] h-[13px] xl:mb-0 lg:mb-0 md:mb-14 sm:mb-0">
            <img
              src="/varos-logotipo.svg"
              alt="Logo"
              className="h-10 mx-auto my-auto"
            />
          </div>
        </div>

        <div className="mb-12 xl:order-2 lg:order-2 md:order-2 sm:order-3">
          <h3 className="text-xl font-bold mb-6">Cursos</h3>
          <ul className="text-baselist-none flex flex-col gap-6">
            <li>
              <a href="#">Valuation do Zero ao Avançado 2.0</a>
            </li>
            <li>
              <a href="#">Código.py</a>
            </li>
            <li>
              <a href="#">Minicurso Reels</a>
            </li>
            <li>
              <a href="#">Enciclopédia de FII</a>
            </li>
          </ul>
        </div>

        <div className="mb-12 xl:order-3 lg:order-3 md:order-3 sm:order-4">
          <h3 className="text-xl  font-bold mb-6">Carteiras</h3>
          <ul className="text-base list-none flex flex-col gap-6">
            <li>
              <a href="#">Carteira FATOR</a>
            </li>
            <li>
              <a href="#">Carteira Essencial</a>
            </li>
            <li>
              <a href="#">Carteira Small Caps</a>
            </li>
            <li>
              <a href="#">Carteira Dividendos</a>
            </li>
            <li>
              <a href="#">Carteira de FIIs</a>
            </li>
          </ul>
        </div>

        <div className="xl:order-4 lg:order-4 md:order-4 sm:order-5">
          <h3 className="text-xl  font-bold mb-6">Sobre</h3>
          <ul className="text-base list-none flex flex-col gap-6">
            <li>
              <a href="#">Quem somos</a>
            </li>
          </ul>
        </div>
        <div className="xl:order-5 lg:order-5 md:order-5 sm:order-6">
          <h3 className="text-xl font-bold mb-6">Rede Sociais</h3>
          <ul className="text-base list-none flex flex-col gap-6">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 order-none text-[14px] font-medium text-greyC1 xl:order-6 lg:order-6 md:order-6 md:my-0 sm:col-span-full sm:order-2 sm:my-6">
          <span>VAROS {currentYear}</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}
