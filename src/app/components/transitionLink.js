"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";

const TransitionLink = ({ href, className, label, children, icon }) => {
    const router = useRouter();
    const pathname = router.asPath; 

    const handleClick = (e) => {
        // Do not handle page transitions if the user clicks on the same link
        if (pathname === href) {
            e.preventDefault();
            return;
        }

        // Handle page transitions if the page is different from the current page
        e.preventDefault();
        animatePageOut(href);
    };

    return (
        <a className={className} href={href} onClick={handleClick}>
            {children ? children : label}
            {icon && <span className="material-symbols-outlined">{icon}</span>}
        </a>
    );
};

export default TransitionLink;
