import React from "react";

export default function Footer() {
  return (
    <footer className="text-greyC1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          <div className="flex flex-col">
            <div className="w-[74px] h-[74px] flex align-middle justify-center bg-greyC1 rounded-lg">
              <img
                src="/Logo.svg"
                alt="Logo"
                className="h-10 mx-auto my-auto"
              />
            </div>
            <div className="w-[74px] h-[74px]">
              <img
                src="/varos-logotipo.svg"
                alt="Logo"
                className="h-10 mx-auto my-auto"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Cursos</h3>
            <ul className="list-none flex flex-col gap-6">
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
          <div>
            <h3 className="text-lg font-bold mb-6">Carteiras</h3>
            <ul className="list-none flex flex-col gap-6">
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
          <div>
            <h3 className="text-lg font-bold mb-6">Sobre</h3>
            <ul className="list-none flex flex-col gap-6">
              <li>
                <a href="#">Quem somos</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Rede Sociais</h3>
            <ul className="list-none flex flex-col gap-6">
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
        </div>
    </footer>
  );
}
