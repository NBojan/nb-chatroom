import { HeaderLogo, HeaderUser } from "..";

const Header = () => {
    return (
      <header>
        <nav className="container mx-auto h-[5rem] flex items-center justify-between space-x-2 lg:max-w-[1024px]">
          <HeaderLogo />

          <HeaderUser />
        </nav>
      </header>
    );
}
 
export default Header;