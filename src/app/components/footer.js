import Link from "next/link";

const Footer = () => (
    <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Portfolio</p>
        <nav>
            <ul className="flex justify-center">
                <li className="mx-2">
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href="/portfolio">
                        Portfolio
                    </Link>
                </li>
            </ul>
        </nav>
    </footer>
);

export default Footer;