import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <Link href="/products" className="text-blue-500">Go to products</Link>
      </div>
      <Footer />
    </div>
  )
}
