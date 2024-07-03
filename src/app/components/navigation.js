import Link from "next/link";

const Navigation = () => (
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
);

export default Navigation;