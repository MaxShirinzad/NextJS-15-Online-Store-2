import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="relative h-[80vh] mb-16 overflow-hidden bg-gradient-to-r from-[#003d5b] to-[#00786c]">
        <div className="max-w-7xl mx-auto px-4 pt-24 h-full flex flex-col">
          <div className="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="w-1/2 text-center md:text-left mb-10 md:mb-0 z-10">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                <div className="mb-2">
                  Discover <span className="text-[#edae49]">Premium</span>
                </div>
                <div>Products</div>
              </h1>
              
              <p className="text-xl text-white/80 max-w-lg mb-10">
                Experience exceptional quality and service with our curated selection of premium products.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/products"
                  className="bg-[#edae49] hover:bg-[#edae49]/90 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Shop Now <i className="bx bx-chevron-right ml-1 text-xl"></i>
                </Link>
              </div>
            </div>

            <div className="w-1/2 relative z-10 flex justify-center md:justify-end">
              <Link href="/products" className="relative group cursor-pointer">
                <div className="absolute -inset-4 rounded-full bg-white/10 backdrop-blur-sm animate-pulse group-hover:bg-white/20 transition-colors"></div>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Image 
                  src="/images/product001.png"
                  alt="featured Product Image"
                  width={500}
                  height={400}
                  className="rounded-lg drop-shadow-2xl object-contain" />
                  <div className="absolute -bottom-4 -right-4 bg-[#edae49]" text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold>
                    NEW ARRIVAL
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
