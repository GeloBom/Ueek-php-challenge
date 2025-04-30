import Link from "next/link"
import { LockIcon, InfoIcon, BarChart3Icon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-blue text-white w-full relative">
      {/* Green gradient at the top */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-lime-400/10 to-transparent pointer-events-none"></div>

      {/* Navigation */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <Link href="/" className="text-lime-400 text-2xl font-bold">
            movefit
          </Link>
          <nav className="hidden md:flex ml-10 space-x-6">
            <Link href="#" className="text-white hover:text-lime-400 transition-colors">
              Início
            </Link>
            <Link href="#beneficios" className="text-white hover:text-lime-400 transition-colors">
              Benefícios
            </Link>
            <Link href="#depoimentos" className="text-white hover:text-lime-400 transition-colors">
              Depoimentos
            </Link>
            <Link href="#" className="text-white hover:text-lime-400 transition-colors">
              Galeria
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-white hover:text-lime-400 transition-colors">
            Login
          </Link>
          <Link
            href="#"
            className="bg-lime-600 hover:bg-lime-500 text-black px-4 py-2 rounded-md font-medium transition-colors"
          >
            Teste grátis
          </Link>
        </div>
      </header>
      <div className="container mx-auto">
        <div className="border-b border-gray-800"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center max-w-3xl relative z-10">
        <h1 className="text-5xl font-bold mb-6">Transforme sua jornada fitness</h1>
        <p className="text-gray-300 mb-10">
          Descubra nossos planos personalizados, elaborados especialmente para se adequar ao seu estilo de vida. Esses
          planos são projetados não apenas para atender às suas necessidades, mas também para te capacitar em sua
          jornada rumo à realização de seus objetivos com facilidade e eficiência.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="#"
            className="bg-lime-600 hover:bg-lime-500 text-black px-6 py-3 rounded-md font-medium transition-colors"
          >
            Teste grátis
          </Link>
          <Link
            href="#"
            className="border border-white hover:border-lime-400 hover:text-lime-400 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Fale conosco
          </Link>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 py-10 mb-20">
        <div className="bg-[#121820] rounded-lg p-8 shadow-xl max-w-4xl mx-auto border border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <div className="text-lime-400 text-2xl font-bold">movefit</div>
            <div className="bg-lime-600 w-20 h-8 rounded"></div>
          </div>

          <div className="flex mb-6">
            <div className="w-1/4 pr-4">
              <div className="bg-[#1a2430] h-10 rounded mb-4"></div>
              <div className="bg-[#1a2430] h-8 rounded mb-4"></div>
              <div className="bg-[#1a2430] h-8 rounded mb-4"></div>
              <div className="bg-[#1a2430] h-8 rounded"></div>
            </div>
            <div className="w-3/4">
              <div className="bg-[#1a2430] h-10 rounded mb-4"></div>
              <div className="bg-[#1a2430] h-20 rounded mb-4"></div>
              <div className="bg-[#1a2430] h-8 rounded mb-4"></div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#1a2430] rounded p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-400">Revenue</div>
                    <div className="text-gray-400">•••</div>
                  </div>
                  <div className="text-xl font-bold mb-4">
                    45.000 <span className="text-lime-400 text-sm">+15%</span>
                  </div>
                  <div className="h-24">
                    <div className="w-full h-full bg-[#1a2430] relative overflow-hidden">
                      <svg viewBox="0 0 200 100" className="w-full h-full">
                        <path
                          d="M0,50 C20,30 40,70 60,50 C80,30 100,60 120,50 C140,40 160,80 180,50 C190,40 200,30 200,50 L200,100 L0,100 Z"
                          fill="none"
                          stroke="#a7ee43"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1a2430] rounded p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-400">Profit</div>
                    <div className="text-gray-400">•••</div>
                  </div>
                  <div className="text-xl font-bold mb-4">
                    60.000 <span className="text-lime-400 text-sm">+10%</span>
                  </div>
                  <div className="h-24">
                    <div className="w-full h-full flex items-end justify-around">
                      {[20, 30, 40, 50, 60, 70, 80].map((height, index) => (
                        <div
                          key={index}
                          className="w-[8%] bg-lime-400 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12">Benefícios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#121820] p-6 rounded-lg border border-gray-800">
            <div className="bg-[#1a2430] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <LockIcon className="text-lime-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Transações rápidas e seguras</h3>
            <p className="text-gray-400">Uma ferramenta notável com suporte excepcional. Não poderia pedir mais.</p>
          </div>

          <div className="bg-[#121820] p-6 rounded-lg border border-gray-800">
            <div className="bg-[#1a2430] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <InfoIcon className="text-lime-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Interface amigável ao usuário</h3>
            <p className="text-gray-400">Uma ferramenta notável com suporte excepcional. Não poderia pedir mais.</p>
          </div>

          <div className="bg-[#121820] p-6 rounded-lg border border-gray-800">
            <div className="bg-[#1a2430] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <InfoIcon className="text-lime-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Suporte 24 horas</h3>
            <p className="text-gray-400">Uma ferramenta notável com suporte excepcional. Não poderia pedir mais.</p>
          </div>

          <div className="bg-[#121820] p-6 rounded-lg border border-gray-800">
            <div className="bg-[#1a2430] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <InfoIcon className="text-lime-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Planos de preços flexíveis</h3>
            <p className="text-gray-400">Uma ferramenta notável com suporte excepcional. Não poderia pedir mais.</p>
          </div>

          <div className="bg-[#121820] p-6 rounded-lg border border-gray-800">
            <div className="bg-[#1a2430] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <InfoIcon className="text-lime-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Integração sem costura</h3>
            <p className="text-gray-400">Uma ferramenta notável com suporte excepcional. Não poderia pedir mais.</p>
          </div>

          <div className="bg-[#121820] p-6 rounded-lg border border-gray-800">
            <div className="bg-[#1a2430] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <BarChart3Icon className="text-lime-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Análises abrangentes</h3>
            <p className="text-gray-400">Uma ferramenta notável com suporte excepcional. Não poderia pedir mais.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12">Depoimentos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {["Quincy Albright", "Sara Nunez", "Khalil Hargrove", "Liora Sheppard", "Zev Winters"].map((name, index) => (
            <div key={index} className="bg-[#121820] p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-medium">{name}</div>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-lime-400 font-bold mb-2">Awesome!!!</div>
              <p className="text-gray-400">This service has transformed the way I manage my projects.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-800 mt-20"></div>
      </div>
      <footer className="container mx-auto px-4 py-10 flex justify-between items-center">
        <Link href="/" className="text-lime-400 text-2xl font-bold">
          movefit
        </Link>
        <Link
          href="#"
          className="border border-white hover:border-lime-400 hover:text-lime-400 px-6 py-3 rounded-md font-medium transition-colors"
        >
          Fale conosco
        </Link>
      </footer>
    </div>
  )
}
