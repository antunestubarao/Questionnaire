import "./Header.css";
import LogoPic from "../imagens/Prancheta 1.png";

function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <a href="https://www.instagram.com/labordados/">
              <img src={LogoPic} alt="Logo" width={"150"} />
            </a>
          </div>
          <div className="menu">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Cadastro</a>
                </li>
                <li>
                  <a href="#">Sair</a>
                </li>
              </ul>
            </nav>
          </div>
          <section className="search">
            <a
              href="https://www.instagram.com/labordados/"
              className="btn-search"
            >
              Search
            </a>
          </section>
        </div>
      </header>
    </div>
  );
}

export default Header;
