import { Logo } from "./Logo";
import { NumResults } from "./Numresults";

import { Search } from "./Search";
export const Navbar = () => {
    return (
        <nav className="nav-bar">
            <Logo />
            <Search />
            <NumResults />
        </nav>
    );
};
