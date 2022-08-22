import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Footer, Layout, Navbar, Hero } from "../components";

const HomePage = () => {
  //
  const router = useRouter();
  const data = router.query;
  //

  return (
    <Layout>
      <Head>
        <title>Jusbrasil: Tech test (level 03 to 04)</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.15.2/dist/css/uikit.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.2/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.2/dist/js/uikit-icons.min.js"></script>
      </Head>

      <Navbar />
      {/**/}

      <Container>
        <div className="uk-card uk-card-default uk-card-body">
          <div className="uk-placeholder uk-margin-bottom">
            <div className="uk-grid uk-child-width-expand">
              <div>
                <h2 className="uk-text-meta">Produto</h2>
                <p>{data.valorPlano}</p>
                <p>{data.tipoPlano}</p>
              </div>
              <div>
                <h2 className="uk-text-meta">Total</h2>
                <p>[TOTAL]</p>
              </div>
            </div>
          </div>
          <div className="uk-grid uk-child-width-1-2@m">
            <div>
              <h3>
                <i data-uk-icon="icon: credit-card"></i> Cartão de crédito
              </h3>
              <p>
                Preencha abaixo todos os campos para comtinuar com a sua compra.
              </p>

              <form action="http://localhost:3050/credit-cards" method="POST">
                <fieldset className="uk-fieldset">
                  <div className="uk-margin">
                    <input
                      type="text"
                      className="uk-input"
                      placeholder="NUMERO DO CARTÃO"
                      id="card_number"
                      name="card_number"
                    />
                  </div>
                  <div className="uk-grid uk-child-width-1-4" data-uk-grid>
                    <div>
                      <input
                        type="text"
                        className="uk-input"
                        placeholder="MÊS"
                        maxLength="2"
                        id="card_month"
                        name="card_month"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="uk-input"
                        placeholder="ANO"
                        maxLength="4"
                        id="card_year"
                        name="card_year"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="uk-input"
                        placeholder="CVV"
                        maxLength="4"
                        id="card_cvv"
                        name="card_cvv"
                      />
                    </div>
                  </div>
                  <div className="uk-margin">
                    <input
                      type="text"
                      className="uk-input"
                      placeholder="NOME IMPRESSO NO CARTÃO"
                      id="card_person_name"
                      name="card_person_name"
                    />
                  </div>
                </fieldset>
                <input
                  type="submit"
                  value="ASSINAR AGORA!"
                  className="uk-button uk-button-primary"
                />
                <p>Cancele quando quiser!</p>
              </form>

              <p>
                Ao prosseguir você estará concordando com os{" "}
                <a href="">Termos de uso do Jusbrasil</a>.
              </p>
            </div>
            <div>
              <h3>
                <i data-uk-icon="icon: lock" className="uk-text-success"></i>{" "}
                Ambiente seguro
              </h3>
              <p>
                O Jusbrasil toma as melhores precauções para proteger seus dados
                sensíveis. Nós não armazenamos seu código de segurança e todas
                as outras informações são devidamente encriptadas e guardadas
                com segurança em nossos servidores para a cobrança de sua
                assinatura Pesquisa Jurídica Básica.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </Layout>
  );
};

export default HomePage;
