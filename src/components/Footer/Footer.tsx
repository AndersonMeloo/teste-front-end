import "./Footer.scss";

function Footer() {

  return (

    <footer className="footer">

      <div className="newsletter">
        <div className="textoNewsletter">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="formNewsletter" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Digite seu nome" required />
          <input type="email" placeholder="Digite seu e-mail" required />
          <button type="submit">INSCREVER</button>
          <label className="labelCheckbox">
            <input type="checkbox" required />
            Aceito os termos e condições
          </label>
        </form>
      </div>

      <div className="conteudoFooter">

        <div className="marcaFooter">
          <div className="logo">
            <img src="/Logo.png" alt="Logo" />
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="iconesSociais">
            <a href="https://www.instagram.com/econverse.ag" target="_blank" rel="noopener noreferrer">
              <img src="/iconsFooter/instagram.png" alt="Icon Instagram" />
            </a>

             <a href="https://www.facebook.com/agenciaeconverse" target="_blank" rel="noopener noreferrer">
              <img src="/iconsFooter/facebook.png" alt="Icon Facebook" />
            </a>

             <a href="https://www.linkedin.com/company/econverse/" target="_blank" rel="noopener noreferrer">
              <img src="/iconsFooter/linkedin.png" alt="Icon Linkedin" />
            </a>
          </div>
        </div>

        <nav className="linksFooter" aria-label="Links do rodapé">
          <div className="colunaFooter">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          <div className="colunaFooter">
            <h3>Ajuda</h3>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
          <div className="colunaFooter">
            <h3>Termos</h3>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </nav>

      </div>

      <div className="rodapeInferior">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

    </footer>
  );
}

export default Footer;