import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#003d5d] shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-[#edae49] text-[#003d5b] rounded-full flex items-center justify-center font-bold text-xl mr-2">
                OS
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Online<span className="text-[#edae49]">Store</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}