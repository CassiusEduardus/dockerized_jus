import Head from "next/head";
import Link from "next/link";
import { Container, Footer, Layout, Navbar, Hero } from "../components";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Jusbrasil: Tech test :d (level 03 to 04)</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.15.2/dist/css/uikit.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.2/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.2/dist/js/uikit-icons.min.js"></script>
      </Head>

      <Navbar />

      <Hero>
        <h1 className="uk-margin-large-bottom">
          Informação jurídica. <br></br>{" "}
          <strong>Mais rápida do que nunca.</strong>
        </h1>
        <a href="#planos" className="uk-button uk-button-primary">
          Conheça nossos planos
        </a>
      </Hero>

      <Container>
        <h2 className="uk-margin-large uk-text-center uk-text-bold">
          A maior fonte de informação jurídica do Brasil, ao seu alcance.
        </h2>
        <div
          className="uk-grid uk-child-width-1-1d@s uk-child-width-expand@m uk-margin-large-bottom"
          data-uk-grid
        >
          <div>
            <div className="uk-margin-large-bottom">
              <span
                data-uk-icon="icon: home; ratio: 2"
                className="uk-text-primary uk-margin-small-bottom"
              ></span>
              <h3 className="uk-margin-remove uk-text-bold uk-text-default">
                O acervo mais completo de Jurisprudência
              </h3>
              <p>
                Reunimos +90 milhões de julgados e milhares de súmulas, de 96
                sistemas de tribunais e com ementa pré-formatada para citação. A
                busca inteligente entende sinônimos, destaca julgados
                qualificados e traz primeiro o que é mais relevante.
              </p>
            </div>
            <div className="uk-margin-bottom">
              <span
                data-uk-icon="icon: folder; ratio: 2"
                className="uk-text-primary uk-margin-small-bottom"
              ></span>
              <h3 className="uk-margin-remove uk-text-bold uk-text-default">
                Processos atualizados com rapidez e precisão
              </h3>
              <p>
                Acervo de 290 milhões de processos que são atualizados por 91
                diários oficiais de justiça e mais de 250 sistemas de tribunais.
              </p>
            </div>
          </div>
          <div>
            <div className="uk-margin-large-bottom">
              <span
                data-uk-icon="icon: file-text; ratio: 2"
                className="uk-text-primary uk-margin-small-bottom"
              ></span>
              <h3 className="uk-margin-remove uk-text-bold uk-text-default">
                Modelos e Peças para facilitar o seu dia a dia
              </h3>
              <p>
                Milhares de novos modelos toda semana. São mais de 25 milhões de
                petições, contestações e procurações disponíveis.
              </p>
            </div>
            <div className="uk-margin-bottom">
              <span
                data-uk-icon="icon: file-edit; ratio: 2"
                className="uk-text-primary uk-margin-small-bottom"
              ></span>
              <h3 className="uk-margin-remove uk-text-bold uk-text-default">
                Leis, Códigos e Decretos de todo país
              </h3>
              <p>
                Disponibilizamos um acervo amplo e organizado com uma busca
                precisa para otimizar a sua pesquisa.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <h2 id="planos" className="uk-text-center uk-margin-bottom">
          Conheça nossos planos
        </h2>


        {/*Entidade coluna UI com 3 seções*/}
        <div className="uk-column-1-3">
          {/*Estilizamos conforme ao máximo para ficar como plans-landing-page*/}
          <div style={{ borderRadius: 5 }}>
            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 class="uk-card-title uk-text-default uk-text-center uk-text-bold">
                Processos
              </h3>

              <div>
                <ul class="uk-list uk-list-disc uk-text-secondary">
                  <li class="uk-text-small">
                    Acompanhe publicações de até 5 processos nos sites dos
                    tribunais e Diários Oficiais
                  </li>
                  <li class="uk-text-small">
                    Mantenha-se informado sobre todas as decisões
                  </li>
                  <li class="uk-text-small">Seja informado por e-mail</li>
                </ul>

                <div class="uk-text-center@s uk-card-body">R$ 29,00 / mês</div>

                <Link
                  href =
                  {{
                    pathname: `/checkout`,
                    
                    query:
                    {
                      valorPlano: "R$ 29,00",
                      tipoPlano: "Assinatura Plano Processos",
                      beneficios: "Acompanhe publicações de até 5 processos nos sites dos tribunais e Diários Oficiais...",
                    },
                  }}
                >
                  <button
                    class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom uk-align-center"
                    style={{ borderRadius: 5 }}
                  >
                    ASSINAR AGORA
                  </button>
                </Link>

                <div class="uk-text-small uk-text-center@s uk-card-body">
                  Cancele quando quiser
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: 5 }}>
            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 class="uk-card-title uk-text-default uk-text-center uk-text-bold">
                Pesquisa Jurídica Básica
              </h3>

              <div>
                <ul class="uk-list uk-list-disc uk-text-secondary">
                  <li class="uk-text-small">
                    Cópia ilimitada de Jurisprudência, Modelos e Peças
                  </li>
                  <li class="uk-text-small">
                    Cópias de ementas já formatadas para uso
                  </li>
                  <br></br>
                  <br></br>
                  <br></br>
                </ul>

                <div class="uk-text-center@s uk-card-body">R$ 49,00 / mês</div>

                <Link
                  href={{
                    pathname: `/checkout`,
                    query: {
                      valorPlano: "R$ 49,00",
                      tipoPlano: "Assinatura Plano Pesquisa Jurídica Básica",
                      beneficios: "Acompanhe publicações de até 5 processos nos sites dos tribunais e Diários Oficiais...",
                    },
                  }}
                >
                  <button
                    class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom uk-align-center"
                    style={{ borderRadius: 5 }}
                  >
                    ASSINAR AGORA
                  </button>
                </Link>

                <div class="uk-text-small uk-text-center@s uk-card-body">
                  Cancele quando quiser
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: 5 }}>
            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 class="uk-card-title uk-text-default uk-text-center uk-text-bold">
                Pesquisa Jurídica Avançada
              </h3>

              <div>
                <ul class="uk-list uk-list-disc uk-text-secondary">
                  <li class="uk-text-small">
                    Leitura de obras da Revista dos Tribunais
                  </li>
                  <li class="uk-text-small">
                    Busca por conteúdo dentro das obras
                  </li>
                  <li class="uk-text-small">
                    Cópia ilimitada com referência formatada{" "}
                  </li>
                  <li class="uk-text-small">
                    Ative o Plano de "Pesquisa Jurídica Básica"
                  </li>
                  <br></br>
                </ul>

                <div class="uk-text-center@s uk-card-body">R$ 69,00 / mês</div>
                {/*nice kkkk*/}

                <Link
                  href={{
                    pathname: `/checkout`,
                    query: {
                      valorPlano: "R$ 69,00",
                      tipoPlano: "Assinatura Plano Pesquisa Jurídica Avançada",
                      beneficios: "Acompanhe publicações de até 5 processos nos sites dos tribunais e Diários Oficiais...",
                    },
                  }}
                >
                  <button
                    class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom uk-align-center"
                    style={{ borderRadius: 5 }}
                  >
                    ASSINAR AGORA
                  </button>
                </Link>

                <div class="uk-text-small uk-text-center@s uk-card-body">
                  Cancele quando quiser
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="uk-column-1-2" style={{ backgroundColor: "#E7F5FD" }}>
          <div>
            <img
              src="https://static.jusbr.com/deadpool/pro/image/recommended_plan_offer@2x.png"
              style={{ maxHeight: 400, marginBottom: 32 }}
            />
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h3 class="uk-text-bold uk-text-center">Pacotes recomendados</h3>

            <div>
              <div
                class="uk-card uk-card-small uk-card-hover uk-card-body"
                style={{ backgroundColor: "#FAFAFA" }}
              >
                <h3 class="uk-card-title uk-text-large uk-text-left uk-text-bold">
                  Processos + Pesquisa Jurídica Básica
                </h3>

                <div class="uk-text-large uk-text-center@s uk-card-body uk-text-bold">
                  R$ 58,00 / mês
                  <Link
                    href={{
                      pathname: `/checkout`,
                      query: {
                        valorPlano: "R$ 58,00",
                        tipoPlano: "Assinatura Plano Bundle Processos Básico",
                        beneficios: "Acompanhe publicações de até 5 processos nos sites dos tribunais e Diários Oficiais...",
                      },
                    }}
                  >
                    <button
                      class="uk-button uk-button-primary uk-margin-small-bottom uk-align-right"
                      style={{ borderRadius: 5 }}
                    >
                      ASSINAR AGORA
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div
                class="uk-card uk-card-small uk-card-hover uk-card-body"
                style={{ backgroundColor: "#FAFAFA" }}
              >
                <h3 class="uk-card-title uk-text-large uk-text-left uk-text-bold">
                  Processos + Pesquisa Jurídica Avançada
                </h3>

                <div class="uk-text-large uk-text-center@s uk-card-body uk-text-bold">
                  R$ 84,00 / mês
                  <Link
                    href={{
                      pathname: `/checkout`,
                      query: {
                        valorPlano: "R$ 84  ,00",
                        tipoPlano: "Assinatura Plano Bundle Processos Avançado",
                        beneficios: "Acompanhe publicações de até 5 processos nos sites dos tribunais e Diários Oficiais...",
                      },
                    }}
                  >
                    <button
                      class="uk-button uk-button-primary uk-margin-small-bottom uk-align-right"
                      style={{ borderRadius: 5 }}
                    >
                      ASSINAR AGORA
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="uk-text-center uk-margin-large-bottom">
          Precisa de um plano para seu escritório, empresa ou órgão público?{" "}
          <a href="https://conteudo.jusbrasil.com.br/oportunidade-pro-pj?utm_source=jusbrasil&utm_medium=web&utm_campaign=new_landing_pro_basic">
            Conheça o plano Jusbrasil PRO para multiusuários
          </a>
        </p>
      </Container>

      <Container>
        <article class="uk-comment">
          <header class="uk-comment-header">
            <div class="uk-grid-medium uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img src="iconeComentario.png"></img>
                {/*Fácil implementação de um banco de dados de avatar's*/}
              </div>

              {/*Entidade comentário na UI*/}
              <div class="uk-width-expand">
                <h4 class="uk-comment-title uk-margin-remove">
                  <a class="uk-link-reset" href="#">
                    Kizi Caroline
                  </a>
                </h4>
                {/*Fácil implementação de um banco de dados de comentários*/}
                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li>12 dias atrás</li>
                  <li>
                    <a href="#">Responder</a>
                  </li>
                  {/*Promover um ambiente de fácil interação entre os users*/}
                </ul>
              </div>
            </div>
          </header>

          {/*Fácil implementação de um banco de dados de comentários*/}
          <div class="uk-comment-body">
            <p>
              O Jusbrasil trouxa para mim um ferramenta muito fácil para
              pesquisar jurisprudências de todo território brasileiro.
            </p>
          </div>
        </article>
      </Container>

      <Footer />
    </Layout>
  );
};

export default HomePage;