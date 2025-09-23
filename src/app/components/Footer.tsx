import Link from "next/link";
import { categories } from "../data/products";

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const companyName = 'OnlineStore'
    return (
        <footer>
            {/* Newsletter Section */}
            <div className="bg-[#003d5b] py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-8 md:mb-0 md:max-w-xl">
                            <h2 className="text-3xl font-bold text-white mb-2">Join our newsletter</h2>
                            <p className="text-white/80">
                                Get the latest products, promotions, and tech news delivered to your inbox.
                            </p>
                        </div>
                        <div className="w-full md:w-auto">
                            <form className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#edae49] min-w-[240px] transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-[#edae49] hover:bg-[#edae49]/90 text-white px-6 py-3 rounded-lg transform hover:scale-105 font-medium flex items-center justify-center"
                                >
                                    Subscribe <i className="bx bx-envelope ml-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="col-span-2 md:col-span-4">
                        <Link href="/" className="flex items-center mb-6">
                            <div className="bg-[#edae49] text-[#003d5b] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mr-2">
                                SB
                            </div>
                            <span className="text-xl font-bold text-[#003d5b]">
                                Store<span className="text-[#edae49]">Brands</span>
                            </span>
                        </Link>
                        <p className="text-gray-600 mb-6">
                            Elevating your tech exprience with premium products and exceptional service.
                        </p>
                        <div className="flex space-x-4">
                            {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
                                <a
                                    href="#"
                                    key={platform}
                                    className="group flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-[#003d5b] transform hover:scale-110 transition-all duration-200"
                                >
                                    <i className={`bx bxl-${platform} text-gray-500 group-hover:text-white text-xl transition-colors`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Categories Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-[#003d5b] font-bold mb-4 text-lg">Categories</h3>
                        <ul className="space-y-2.5">
                            {categories.slice(0, 5).map((category) => (
                                <li key={category.slug}>
                                    <Link
                                        href="/products"
                                        className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-flex items-center transition-all"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#edae49] opacity-70 mr-2 inline-block"></span>
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/products"
                                    className="text-[#00798c] hover:text-[#003d5b] font-medium hover:translate-x-1 inline-flex items-center transition-all group"
                                >
                                    View All
                                    <i className="bx bx-right-arrow-alt ml-1 opacity-70 group-hover:translate-x-1 transition-transform"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-[#003d5b] font-bold mb-4 text-lg">Shop</h3>
                        <ul className="space-y-2.5">
                            {['All Products', 'New Arrivals', 'Best Sellers', 'Deals', 'Gift Cards'].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-block transition-all"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-[#003d5b] font-bold mb-4 text-lg">Support</h3>
                        <ul className="space-y-2.5">
                            {['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Track Order'].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-block transition-all"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-[#003d5b] font-bold mb-4 text-lg">Company</h3>
                        <ul className="space-y-2.5">
                            {['About Us', 'Blog', 'Careers', 'Press', 'Privacy Policy'].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-block transition-all"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-500 text-sm mb-4 md:mb-0">
                            &copy; {currentYear} OnlineStore. All rights reserved.
                        </div>
                        <div className="flex items-center">
                            <div className="hidden sm:flex items-center mr-6 space-x-3">
                                {['Visa', 'MasterCard', 'PayPal', 'Apple'].map((method) => (
                                    <div className="text-gray-400" key={method}>
                                        <i className={`bx bxl-${method.toLowerCase()} text-xl`} />
                                    </div>
                                ))}
                            </div>

                            <div className="flex space-x-4 items-center">
                                <a href="#" className="text-sm text-gray-500 hover:text-[#003d5b]">
                                    Terms
                                </a>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <a href="#" className="text-sm text-gray-500 hover:text-[#003d5b]">
                                    Privacy
                                </a>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <a href="#" className="text-sm text-gray-500 hover:text-[#003d5b]">
                                    Cookies
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}