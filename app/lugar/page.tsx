"use client";

import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faFlag as faFlagSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, faFlag as faFlagRegular } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";

export default function Lugar() {
  const [favorite, setFavorite] = React.useState(false);
  const [flagged, setFlagged] = React.useState(false);
  const toggleFavorite = () => setFavorite((v) => !v);
  const toggleFlagged = () => setFlagged((v) => !v);

  return (
    <>
      {/* MENU TOPO (copiado da home para manter consistência) */}
      <header>
        <Navbar expand="md" bg="light" className="bg-joker fixed-top border-top border-black" aria-label="menu alô alô bahia">
          <Container className="gx-0">
            <Navbar.Brand href="/">
              <img src="https://aloalobahia.com/wp-content/uploads/2024/03/aloalo-logo-horizontal-preta-sm-05.png" style={{ filter: "invert(0)" }} alt="Alô Alô Bahia" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarsExample04" />
            <Navbar.Collapse id="navbarsExample04">
              <Nav className="ms-auto mb-2 mb-md-0 py-2 text-center">
                {[
                  { href: "/noticias/", label: "notícias" },
                  { href: "/giro-de-fotos/", label: "giro de fotos" },
                  { href: "/noticias/sob-medida/", label: "sob medida" },
                  { href: "/noticias/agro/", label: "agro" },
                  { href: "/noticias/esg/", label: "esg" },
                  { href: "/noticias/trancoso/", label: "trancoso" },
                  { href: "/gastronomia/", label: "gastronomia" },
                  { href: "/esportes/", label: "esportes" },
                  { href: "/alo-alo-kids/", label: "alô alô kids" },
                  { href: "/alo-alo-agenda/", label: "agenda" },
                  { href: "/alo-alo-entrevistas/", label: "entrevistas" },
                ].map((item) => (
                  <Nav.Item key={item.href} className="mx-menu my-1">
                    <Nav.Link className="nav-link fst-italic font-600 font-serif fs-menu text-joker border border-joker border-4 rounded-pill px-menu py-0" href={item.href}>
                      {item.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
                <Nav.Item className="mx-menu my-1">
                  <Nav.Link className="nav-link fst-italic font-600 font-serif fs-menu text-joker px-3 py-0" href="/buscar/">
                    <i className="bi bi-search" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Banner topo (mantém padrão visual) */}
      <section className="py-4 bg-joker">
        <Container>
          <Row>
            <Col md={8} className="text-center center ms-md-auto me-md-auto">
              <a href="https://saude.salvador.ba.gov.br/hepatites-virais/" target="_blank" rel="noreferrer">
                <img
                  loading="lazy"
                  className="img-fluid"
                  src="https://aloalobahia.com/wp-content/uploads/2026/01/BAN_728x90px.gif"
                  alt="Prefeitura de Salvador – Janeiro 26"
                  title="Prefeitura de Salvador – Janeiro 26"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Conteúdo do lugar (adaptado) */}
      <section className="bg-joker px-3 pt-3">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} xs={12}>
              <div className="d-flex justify-content-between align-items-center mb-0">
                <ul className="ps-1 fs-5 text-black py-0 font-600 list-inline mb-0">
                  <li className="bg-white text-joker rounded-pill py-0 px-2 my-1 font-serif fst-italic">Ribeira</li>
                </ul>
                <div className="bg-white text-joker rounded-pill py-0 px-4 my-1 font-serif fst-italic fs-3 position-relative d-inline-flex align-items-center">
                  <button
                    type="button"
                    aria-pressed={favorite}
                    className="btn btn-sm p-0 m-0 border-0 bg-transparent text-joker d-inline-flex align-items-center justify-content-center me-3"
                    onClick={toggleFavorite}
                    title={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                  >
                    <FontAwesomeIcon icon={favorite ? faHeartSolid : faHeartRegular} style={{ fontSize: 20, lineHeight: 1 }} />
                  </button>
                  <button
                    type="button"
                    aria-pressed={flagged}
                    className="btn btn-sm p-0 m-0 border-0 bg-transparent text-joker d-inline-flex align-items-center justify-content-center"
                    onClick={toggleFlagged}
                    title={flagged ? "Remover flag" : "Marcar flag"}
                  >
                    <FontAwesomeIcon icon={flagged ? faFlagSolid : faFlagRegular} style={{ fontSize: 20, lineHeight: 1 }} />
                  </button>
                </div>
              </div>
              <h1 className="fw-semibold display-2 mt-1 mb-0 text-joker" style={{ letterSpacing: "-0.040em", lineHeight: "1.1em" }}>
                <span style={{ backgroundColor: "#FAF7EC" }}>Igreja de Nossa Senhora da Penha de França</span>
              </h1>
              <h2 className="fs-3 fw-medium fst-italic text-joker mt-1 mb-1" style={{ letterSpacing: "-0.02em" }}>
                Um Tesouro no Alto da Cidade: Conhecendo a Igreja da Penha de França
              </h2>

              {/* Seção Redação (design system) */}
              <div className="row mx-0">
                <div className="col my-auto">
                  <h2 className="title font-26 fst-italic fw-bold my-0 pt-4" style={{ letterSpacing: "-0.025em" }}>
                    Redação Alô Alô Bahia
                  </h2>
                  <div className="fs-6 my-1 text-grey my-0 py-0">redacao@aloalobahia.com</div>
                </div>
              </div>
              <div className="row mx-0 mt-3">
                <div className="col-12">
                  <p className="font-15 fw-medium mb-3 lh-sm">
                    <span className="me-2">
                      <i className="bi bi-pencil-fill"></i>
                    </span>
                    Guia Alô Alô Bahia
                  </p>
                  <p className="font-15 fw-medium">
                    <span className="me-2">
                      <i className="bi bi-geo-alt-fill"></i>
                    </span>
                    <a href="https://share.google/tWFoB5M7KJEXKl01W" target="_blank" rel="noreferrer" className="text-decoration-underline">
                      Praça Padre Francisco Dórea, Reis, 2 - Ribeira, Salvador - BA, 40420-610
                    </a>
                  </p>
                </div>
              </div>

              {/* Imagem abaixo da Redação */}
              <img
                className="w-100 mt-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Igreja_Matriz_de_Nossa_Senhora_da_Penha_de_Fran%C3%A7a_17.jpg/668px-Igreja_Matriz_de_Nossa_Senhora_da_Penha_de_Fran%C3%A7a_17.jpg"
                alt="Igreja de Nossa Senhora da Penha de França"
                title="Igreja de Nossa Senhora da Penha de França"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="px-3">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} xs={12}>
              <article id="blog-post" className="mt-2 mb-4">
                <p>
                  Localizada em uma área elevada de Salvador, a Igreja de Nossa Senhora da Penha de França é um excelente ponto de parada para quem deseja conhecer um lado mais tranquilo e autêntico da cidade. Além do valor histórico e religioso, o local chama a atenção pela vista privilegiada e pelo clima de calmaria, ideal para quem quer fugir do circuito turístico mais movimentado.
                </p>
                <p>
                  Ao redor da igreja, o visitante encontra ruas residenciais tradicionais, com comércio local, pequenas lanchonetes e vendedores que ajudam a compor a experiência cotidiana do bairro. É um ótimo lugar para observar o ritmo da cidade, conversar com moradores e experimentar sabores simples e típicos, longe das áreas mais turísticas.
                </p>
                <p>
                  A visita pode ser facilmente combinada com outros pontos de interesse próximos, como áreas costeiras e mirantes naturais, tornando o passeio ainda mais interessante. O acesso é simples, seja de carro, transporte por aplicativo ou ônibus, e a região costuma ser tranquila durante o dia.
                </p>
                <p>
                  Para quem aprecia fotografia, a igreja oferece ótimas oportunidades: a fachada histórica, o entorno urbano e a vista do alto rendem registros marcantes, especialmente no fim da tarde, quando a luz do sol valoriza a paisagem. O pôr do sol visto das proximidades é um dos destaques para muitos visitantes.
                </p>
                <p>
                  Mais do que um templo religioso, a Igreja da Penha de França funciona como um convite a desacelerar e explorar Salvador com mais calma. É um destino ideal para viajantes curiosos, interessados em história, cultura local e experiências menos óbvias, mas igualmente memoráveis.
                </p>
              </article>
              <div className="mt-4">
                <a
                  href="https://whatsapp.com/channel/0029VaB3cLnK5cDAIJp1Dj3i"
                  className="btn btn-outline-success border-2 fw-bold rounded-pill w-100 text-black"
                  style={{ borderColor: "#25D366", backgroundColor: "#e5faed" }}
                >
                  <i className="bi bi-whatsapp"></i> Canal Alô Alô Bahia no WhatsApp! Acesse <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sob Medida (React Swiper) */}
      <section className="py-4">
        <Container>
          <Row className="mb-4">
            <Col md={6} xs={9}>
              <h2 className="display-5 fst-italic fw-medium mb-3 pb-0">
                <span className="rounded-pill px-3 bg-joker text-joker">Destaques no Local</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={9} xs={12} className="mb-5">
              <Swiper
                className="myNews02"
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                breakpoints={{
                  250: { slidesPerView: 1, spaceBetween: 4 },
                  768: { slidesPerView: 2, spaceBetween: 4 },
                  1024: { slidesPerView: 3, spaceBetween: 5 },
                }}
              >
                <SwiperSlide>
                  <div className="row g-0">
                    <div className="col-md-12 col-12">
                      <a href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={{ ["--bs-aspect-ratio" as any]: "90%" }}>
                          <img src="https://aloalobahia.com/wp-content/uploads/2026/01/novem_alo_alo_bahi.jpeg" className="w-100 h-100 object-fit-cover" alt="Confira a programação da novena em homenagem ao Senhor do Bonfim" title="Confira a programação da novena em homenagem ao Senhor do Bonfim" />
                        </div>
                      </a>
                    </div>
                    <div className="col-md-12 col-12 my-auto px-2" style={{ zIndex: 1 }}>
                      <div className="fs-6 mb-0" style={{ marginTop: "-4rem" }}></div>
                      <h3 className="bg-white text-black fs-4 p-2 py-2 lh-1 fw-medium" style={{ marginTop: 0 }}>
                        <a className="text-decoration-none" href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/">
                          Confira a programação da novena em homenagem ao Senhor do Bonfim
                        </a>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="row g-0">
                    <div className="col-md-12 col-12">
                      <a href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={{ ["--bs-aspect-ratio" as any]: "90%" }}>
                          <img src="https://aloalobahia.com/wp-content/uploads/2026/01/novem_alo_alo_bahi.jpeg" className="w-100 h-100 object-fit-cover" alt="Confira a programação da novena em homenagem ao Senhor do Bonfim" title="Confira a programação da novena em homenagem ao Senhor do Bonfim" />
                        </div>
                      </a>
                    </div>
                    <div className="col-md-12 col-12 my-auto px-2" style={{ zIndex: 1 }}>
                      <div className="fs-6 mb-0" style={{ marginTop: "-4rem" }}></div>
                      <h3 className="bg-white text-black fs-4 p-2 py-2 lh-1 fw-medium" style={{ marginTop: 0 }}>
                        <a className="text-decoration-none" href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/">
                          Confira a programação da novena em homenagem ao Senhor do Bonfim
                        </a>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="row g-0">
                    <div className="col-md-12 col-12">
                      <a href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={{ ["--bs-aspect-ratio" as any]: "90%" }}>
                          <img src="https://aloalobahia.com/wp-content/uploads/2026/01/novem_alo_alo_bahi.jpeg" className="w-100 h-100 object-fit-cover" alt="Confira a programação da novena em homenagem ao Senhor do Bonfim" title="Confira a programação da novena em homenagem ao Senhor do Bonfim" />
                        </div>
                      </a>
                    </div>
                    <div className="col-md-12 col-12 my-auto px-2" style={{ zIndex: 1 }}>
                      <div className="fs-6 mb-0" style={{ marginTop: "-4rem" }}></div>
                      <h3 className="bg-white text-black fs-4 p-2 py-2 lh-1 fw-medium" style={{ marginTop: 0 }}>
                        <a className="text-decoration-none" href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/">
                          Confira a programação da novena em homenagem ao Senhor do Bonfim
                        </a>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="row g-0">
                    <div className="col-md-12 col-12">
                      <a href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={{ ["--bs-aspect-ratio" as any]: "90%" }}>
                          <img src="https://aloalobahia.com/wp-content/uploads/2026/01/novem_alo_alo_bahi.jpeg" className="w-100 h-100 object-fit-cover" alt="Confira a programação da novena em homenagem ao Senhor do Bonfim" title="Confira a programação da novena em homenagem ao Senhor do Bonfim" />
                        </div>
                      </a>
                    </div>
                    <div className="col-md-12 col-12 my-auto px-2" style={{ zIndex: 1 }}>
                      <div className="fs-6 mb-0" style={{ marginTop: "-4rem" }}></div>
                      <h3 className="bg-white text-black fs-4 p-2 py-2 lh-1 fw-medium" style={{ marginTop: 0 }}>
                        <a className="text-decoration-none" href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/">
                          Confira a programação da novena em homenagem ao Senhor do Bonfim
                        </a>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="row g-0">
                    <div className="col-md-12 col-12">
                      <a href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={{ ["--bs-aspect-ratio" as any]: "90%" }}>
                          <img src="https://aloalobahia.com/wp-content/uploads/2026/01/novem_alo_alo_bahi.jpeg" className="w-100 h-100 object-fit-cover" alt="Confira a programação da novena em homenagem ao Senhor do Bonfim" title="Confira a programação da novena em homenagem ao Senhor do Bonfim" />
                        </div>
                      </a>
                    </div>
                    <div className="col-md-12 col-12 my-auto px-2" style={{ zIndex: 1 }}>
                      <div className="fs-6 mb-0" style={{ marginTop: "-4rem" }}></div>
                      <h3 className="bg-white text-black fs-4 p-2 py-2 lh-1 fw-medium" style={{ marginTop: 0 }}>
                        <a className="text-decoration-none" href="https://aloalobahia.com/noticias/2026/01/09/confira-a-programacao-da-novena-em-homenagem-ao-senhor-do-bonfim/">
                          Confira a programação da novena em homenagem ao Senhor do Bonfim
                        </a>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col md={3} xs={12} className="center text-center">
              <a href="https://www.costadosauipe.com.br/" target="_blank" rel="noreferrer">
                <img
                  className="img-fluid"
                  loading="lazy"
                  src="https://aloalobahia.com/wp-content/uploads/2025/12/3-BANNERS-CS-ALO-ALO-BAHIA-300x250px.jpg"
                  alt="Sauipe Lateral"
                  title="Sauipe Lateral"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      

      {/* Footer simples para manter padrão (mesmo da home) */}
      <footer className="mt-0">
        <section className="pt-0 pb-3 border-top bg-joker px-3">
          <div className="heading-line huge bg-black center mb-0 pb-0"></div>
          <Container>
            <Row className="mt-5">
              <Col md={2} xs={3} className="center">
                <img
                  src="https://aloalobahia.com/wp-content/uploads/2024/03/aloalo-logo-horizontal-preta-sm-04.png"
                  style={{ filter: "invert(100)" }}
                  className="w-100"
                  alt="Agenda"
                  title="Agenda"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
}
