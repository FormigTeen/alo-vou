"use client";

import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faFlag as faFlagSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, faFlag as faFlagRegular } from "@fortawesome/free-regular-svg-icons";
import React from "react";

export default function Home() {
  const ratioStyle = { ["--bs-aspect-ratio" as any]: "110%" } as React.CSSProperties;

  // Protótipo de estado para ícones (favorito/flag) por card
  const [favorite, setFavorite] = React.useState<Record<number, boolean>>({});
  const [flagged, setFlagged] = React.useState<Record<number, boolean>>({});
  const toggleFavorite = (idx: number) =>
    setFavorite((prev) => ({ ...prev, [idx]: !prev[idx] }));
  const toggleFlagged = (idx: number) =>
    setFlagged((prev) => ({ ...prev, [idx]: !prev[idx] }));

  const IconsBar: React.FC<{ idx: number; size?: number; className?: string }> = ({ idx, size = 20, className = "" }) => {
    const isFav = !!favorite[idx];
    const isFlag = !!flagged[idx];
    return (
      <div className={("bg-white text-joker rounded-pill py-0 px-4 my-1 font-serif fst-italic fs-3 position-relative d-inline-flex align-items-center " + className).trim()}>
        <span aria-hidden="true" className="invisible">00/00</span>
        <div className="position-absolute top-50 start-50 translate-middle d-inline-flex align-items-center justify-content-center gap-3">
          <button
            type="button"
            aria-pressed={isFav}
            className="btn btn-sm p-0 m-0 border-0 bg-transparent text-joker d-inline-flex align-items-center justify-content-center"
            onClick={() => toggleFavorite(idx)}
            title={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <FontAwesomeIcon icon={isFav ? faHeartSolid : faHeartRegular} style={{ fontSize: size, lineHeight: 1 }} />
          </button>
          <button
            type="button"
            aria-pressed={isFlag}
            className="btn btn-sm p-0 m-0 border-0 bg-transparent text-joker d-inline-flex align-items-center justify-content-center"
            onClick={() => toggleFlagged(idx)}
            title={isFlag ? "Remover flag" : "Marcar flag"}
          >
            <FontAwesomeIcon icon={isFlag ? faFlagSolid : faFlagRegular} style={{ fontSize: size, lineHeight: 1 }} />
          </button>
        </div>
      </div>
    );
  };

  const CardTextBlock: React.FC<{
    idx: number;
    heading: "h2" | "h3";
    href: string;
    title: string;
    anchorClass?: string;
    subtitle?: string;
    description?: string;
  }> = ({ idx, heading, href, title, anchorClass = "text-decoration-none", subtitle: subtitleProp, description }) => {
    const HeadingTag = heading as any;
    const titleClasses =
      heading === "h2"
        ? "text-joker fs-3 lh-1 fw-semibold"
        : "fs-4 text-black lh-1 font-600";
    const subtitleOptions = [
      "Rio Vermelho",
      "Ribeira",
      "Pituba",
      "Centro",
      "Barra",
      "Graça",
      "Paripe",
    ];
    const subtitle = subtitleProp ?? subtitleOptions[idx % subtitleOptions.length];
    return (
      <div className="bg-white" style={{ marginTop: "-2.5rem", letterSpacing: "-0.05rem" }}>
        <div className="p-2 pt-4">
          <p className="text-black op-50 mb-0 text-uppercase" style={{ marginBottom: "-2px", fontSize: "0.8rem", lineHeight: 1 }}>
            {subtitle}
          </p>
          <HeadingTag className={titleClasses + " mt-0 pt-0 pb-1 mb-1"}>
            <Link className={anchorClass} href={href}>
              {title}
            </Link>
          </HeadingTag>
          <p className="fs-6 text-black op-50 mb-2">
            {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet."}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* MENU TOPO */}
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

      {/* Barra WhatsApp mobile */}
      <nav className="pb-2 pt-3 fixed-bottom d-md-none" style={{ backgroundColor: "#25D366" }}>
        <Container>
          <Row>
            <Col xs={12} className="text-center fw-medium">
              <a
                href="https://whatsapp.com/channel/0029VaB3cLnK5cDAIJp1Dj3i"
                className="text-black text-decoration-none"
              >
                <i className="bi bi-whatsapp"></i> Alô Alô Bahia no seu WhatsApp! Inscreva-se <i className="bi bi-arrow-right"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </nav>

      {/* Banner topo */}
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

      {/* Título (#Bora) */}
      <section className="py-2 mb-4 bg-joker">
        <Container>
          <Row>
            <Col md={10} xs={9} className="my-auto">
              <h1 className="display-1 text-joker fw-semibold fst-italic lh-1">#Bora</h1>
            </Col>
            <Col md={2} xs={3} className="my-auto">
              <img className="w-100" src="" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* DESTAQUE MAIOR (notícias destaque) */}
      <section className="py-0 bg-joker-half-01">
        <div className="container gx-2">
          <div className="row justify-content-center gx-1">
            {/* Destaque central único */}
            <div className="col-12 col-lg-6 mb-3" style={{ maxWidth: 720 }}>
              <div className="row g-0">
                <div className="col-md-12 col-12">
                  <Link href="/lugar" style={{ textDecoration: "none" }}>
                     <div className="ratio overflow-hidden position-relative" style={{ ["--bs-aspect-ratio" as any]: "100%" }}>
                       <img
                         src="https://aloalobahia.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-11-at-09.49.20.jpeg"
                         className="w-100 h-100 object-fit-cover"
                         alt="Procissão com imagem do Senhor do Bonfim é realizada em Salvador; veja vídeos"
                         title="Procissão com imagem do Senhor do Bonfim é realizada em Salvador; veja vídeos"
                       />
                    </div>
                  </Link>
                </div>
                <div className="col-md-12 col-12 px-2" style={{ zIndex: 1 }}>
                  <div className="d-flex justify-content-between align-items-center mb-4 text-black" style={{ marginTop: "-4rem", letterSpacing: "-0.05rem" }}>
                    <ul className="ps-3 fs-3 text-black py-0 font-600 list-inline mb-0">
                      <li className="bg-white text-joker rounded-pill py-0 px-2 my-1 font-serif fst-italic">Destaque da Semana</li>
                    </ul>
                    <IconsBar idx={0} size={20} className="me-3" />
                  </div>
                  <CardTextBlock
                    idx={0}
                    heading="h2"
                    href="/lugar"
                    title="Igreja de Nossa Senhora da Penha de França"
                    anchorClass="text-joker text-decoration-none"
                    subtitle="Ribeira"
                    description="Com o tema “O exercício do Ministério Público de Jesus, o Amado Senhor do Bonfim”, os festejos em homenagem ao..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Grid de cards + lateral */}
      <section className="py-5 border-bottom">
        <Container>
          <Row>
            <Col md={9} xs={12} className="mb-5">
              <Row xs={1} md={2} className="g-2">
                {/* Card 1 */}
                <Col>
                  <Row className="g-0">
                    <Col md={12} xs={12}>
                      <Link href="/lugar" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={ratioStyle}>
                          <img
                            src="https://aloalobahia.com/wp-content/uploads/2026/01/IMG_3886-405x720.jpg"
                            className="w-100 h-100 object-fit-cover"
                            alt="Bell Marques reúne multidão em nova edição de corrida em Salvador; veja fotos"
                            title="Bell Marques reúne multidão em nova edição de corrida em Salvador; veja fotos"
                          />
                        </div>
                      </Link>
                    </Col>
                    <Col md={12} xs={12} className="px-2" style={{ zIndex: 1 }}>
                      <div className="d-flex justify-content-end align-items-center mb-4 text-black" style={{ marginTop: "-4rem", letterSpacing: "-0.05rem" }}>
                        {/* data removida */}
                        <IconsBar idx={1} size={20} className="me-3" />
                      </div>
                      <CardTextBlock
                        idx={1}
                        heading="h3"
                        href="/lugar"
                        title="Centro de Convenções"
                        subtitle="Boca do Rio"
                        description="Unindo saúde, bem estar e diversão, a capital baiana recebeu neste domingo (11) a terceira edição da Corrida 100% Você...."
                      />
                    </Col>
                  </Row>
                </Col>

                {/* Card 2 */}
                <Col>
                  <Row className="g-0">
                    <Col md={12} xs={12}>
                      <Link href="/lugar" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={ratioStyle}>
                          <img
                            src="https://aloalobahia.com/wp-content/uploads/2026/01/0533337a-07d5-446c-a195-0583fbce2fc8-933x1400.jpeg"
                            className="w-100 h-100 object-fit-cover"
                            alt="Banjo Novo anuncia mais duas edições de verão até fevereiro"
                            title="Banjo Novo anuncia mais duas edições de verão até fevereiro"
                          />
                        </div>
                      </Link>
                    </Col>
                    <Col md={12} xs={12} className="px-2" style={{ zIndex: 1 }}>
                      <div className="d-flex justify-content-end align-items-center mb-4 text-black" style={{ marginTop: "-4rem", letterSpacing: "-0.05rem" }}>
                        {/* data removida */}
                        <IconsBar idx={2} size={20} className="me-3" />
                      </div>
                      <CardTextBlock
                        idx={2}
                        heading="h3"
                        href="/lugar"
                        title="Porto Salvador"
                        subtitle="Centro"
                        description="O Banjo Novo realizou, na última sexta-feira (9), sua primeira roda de samba do verão 2026, marcando o início de..."
                      />
                    </Col>
                  </Row>
                </Col>

                {/* Card 3 */}
                <Col>
                  <Row className="g-0">
                    <Col md={12} xs={12}>
                      <Link href="/lugar" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={ratioStyle}>
                          <img
                            src="https://aloalobahia.com/wp-content/uploads/2026/01/Screenshot-2026-01-10-at-21.05.48-2.jpg"
                            className="w-100 h-100 object-fit-cover"
                            alt="Olodum recebe Gilmelândia e É o Tchan em nova edição da Terça da Benção"
                            title="Olodum recebe Gilmelândia e É o Tchan em nova edição da Terça da Benção"
                          />
                        </div>
                      </Link>
                    </Col>
                    <Col md={12} xs={12} className="px-2" style={{ zIndex: 1 }}>
                      <div className="d-flex justify-content-end align-items-center mb-4 text-black" style={{ marginTop: "-4rem", letterSpacing: "-0.05rem" }}>
                        {/* data removida */}
                        <IconsBar idx={3} size={20} className="me-3" />
                      </div>
                      <CardTextBlock
                        idx={3}
                        heading="h3"
                        href="/lugar"
                        title="Praça das Artes Mestre Neguinho do Samba"
                        subtitle="Pelourinho"
                        description="A nova edição da tradicional Terça da Benção, comandada pelo Olodum, contará com as participações da cantora Gilmelândia e do..."
                      />
                    </Col>
                  </Row>
                </Col>

                {/* Card 4 */}
                <Col>
                  <Row className="g-0">
                    <Col md={12} xs={12}>
                      <Link href="/lugar" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={ratioStyle}>
                          <img
                            src="https://aloalobahia.com/wp-content/uploads/2026/01/mundo-de-bita.jpg"
                            className="w-100 h-100 object-fit-cover"
                            alt="Mundo Bita lota Parque da Cidade com show gratuito; veja fotos"
                            title="Mundo Bita lota Parque da Cidade com show gratuito; veja fotos"
                          />
                        </div>
                      </Link>
                    </Col>
                    <Col md={12} xs={12} className="px-2" style={{ zIndex: 1 }}>
                      <div className="d-flex justify-content-end align-items-center mb-4 text-black" style={{ marginTop: "-4rem", letterSpacing: "-0.05rem" }}>
                        {/* data removida */}
                        <IconsBar idx={4} size={20} className="me-3" />
                      </div>
                      <CardTextBlock
                        idx={4}
                        heading="h3"
                        href="/lugar"
                        title="Parque da Cidade"
                        subtitle="Itaigara"
                        description="O primeiro dia do Festival no Parque reuniu uma multidão de pais e crianças neste sábado (10), que lotaram a Concha Acústica do Parque da Cidade, no Itaigara, para acompanhar o espetáculo do Mundo Bita, um dos maiores fenômenos da música infantil brasileira."
                      />
                    </Col>
                  </Row>
                </Col>

                {/* Card 5 */}
                <Col>
                  <Row className="g-0">
                    <Col md={12} xs={12}>
                      <Link href="/lugar" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={ratioStyle}>
                          <img
                            src="https://aloalobahia.com/wp-content/uploads/2026/01/aaaaax.jpg"
                            className="w-100 h-100 object-fit-cover"
                            alt="Mari Gonzalez visita Casa de Vidro do BBB 26 em Salvador"
                            title="Mari Gonzalez visita Casa de Vidro do BBB 26 em Salvador"
                          />
                        </div>
                      </Link>
                    </Col>
                    <Col md={12} xs={12} className="px-2" style={{ zIndex: 1 }}>
                      <div className="d-flex justify-content-end align-items-center mb-4 text-black" style={{ marginTop: "-4rem", letterSpacing: "-0.05rem" }}>
                        {/* data removida */}
                        <IconsBar idx={5} size={20} className="me-3" />
                      </div>
                      <CardTextBlock
                        idx={5}
                        heading="h3"
                        href="/lugar"
                        title="Shopping Bela Vista"
                        subtitle="Horto Bela Vista"
                        description="A influenciadora Mari Gonzalez marcou presença na Casa de Vidro do BBB 26 na manhã deste sábado (10), no Shopping Bela Vista, em Salvador. Conhecida por sua participação no BBB 20, a famosa foi até o meio do público para interagir com os participantes do reality."
                      />
                    </Col>
                  </Row>
                </Col>

                {/* Card 6 */}
                <Col>
                  <Row className="g-0">
                    <Col md={12} xs={12}>
                      <a href="/lugar" style={{ textDecoration: "none" }}>
                        <div className="ratio overflow-hidden position-relative" style={ratioStyle}>
                          <img
                            src="https://aloalobahia.com/wp-content/uploads/2026/01/caetano-em-bar-com-amigos.jpg"
                            className="w-100 h-100 object-fit-cover"
                            alt="De férias em Salvador, Caetano Veloso visita Bar da Marli, famoso no Largo 2 de Julho"
                            title="De férias em Salvador, Caetano Veloso visita Bar da Marli, famoso no Largo 2 de Julho"
                          />
                        </div>
                      </a>
                    </Col>
                    <Col md={12} xs={12} className="px-2" style={{ zIndex: 1 }}>
                      <div className="d-flex justify-content-end align-items-center mb-4 text-black" style={{ marginTop: "-4rem", letterSpacing: "-0.05rem" }}>
                        {/* data removida */}
                        <IconsBar idx={6} size={20} className="me-3" />
                      </div>
                      <CardTextBlock
                        idx={6}
                        heading="h3"
                        href="/lugar"
                        title="Bar da Marli"
                        subtitle="2 de Julho"
                        description="O cantor e compositor Caetano Veloso aproveitou a noite desta sexta-feira (9) em Salvador durante suas férias na Bahia. Depois..."
                      />
                    </Col>
                  </Row>
                </Col>

                {/* Card 7 removido para limitar a 6 notícias */}

                {/* Cards 8–10 removidos para limitar a 7 notícias */}
              </Row>
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

      {/* Footer */}
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

            <Row className="mb-5">
              <Col md={6} xs={12} className="center">
                <h3 className="fs-1 lh-1 text-center text-joker">
                  Acompanhe o <span className="fst-italic font-700">Alô Alô Bahia</span> também nos <span className="fst-italic font-700">canais sociais!</span>
                </h3>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={9} xs={12} className="center">
                <ul className="list-inline fs-4 text-center">
                  <li className="py-1">
                    <a className="btn text-joker border border-joker btn-lg border-2 rounded-pill py-1 px-3 my-1 font-700 font-serif fst-italic" href="https://www.instagram.com/sitealoalobahia/" target="_blank" rel="noreferrer">
                      <i className="bi bi-instagram"></i> <strong>Instagram</strong> <span className="op-50">@sitealoalobahia</span>
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="btn text-joker border border-joker btn-lg border-2 rounded-pill py-1 px-3 my-1 font-700 font-serif fst-italic" href="https://whatsapp.com/channel/0029VaB3cLnK5cDAIJp1Dj3i" target="_blank" rel="noreferrer">
                      <i className="bi bi-whatsapp"></i> <strong>WhatsApp</strong> <span className="op-50">Canal Oficial</span>
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="btn text-joker border border-joker btn-lg border-2 rounded-pill py-1 px-3 my-1 font-700 font-serif fst-italic" href="https://news.google.com/publications/CAAqBwgKMLjxnwswxfu3Aw?hl=pt-BR&gl=BR&ceid=BR%3Apt-419" target="_blank" rel="noreferrer">
                      <i className="bi bi-google"></i> <strong>Google News</strong> <span className="op-50">@aloalobahia</span>
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="btn text-joker border border-joker btn-lg border-2 rounded-pill py-1 px-3 my-1 font-700 font-serif fst-italic" href="https://www.tiktok.com/@aloalobahia" target="_blank" rel="noreferrer">
                      <i className="bi bi-tiktok"></i> <strong>TikTok</strong> <span className="op-50">@aloalobahia</span>
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="btn text-joker border border-joker btn-lg border-2 rounded-pill py-1 px-3 my-1 font-700 font-serif fst-italic" href="https://www.threads.net/@sitealoalobahia" target="_blank" rel="noreferrer">
                      <i className="bi bi-threads"></i> <strong>Threads</strong> <span className="op-50">@sitealoalobahia</span>
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="btn text-joker border border-joker btn-lg border-2 rounded-pill py-1 px-3 my-1 font-700 font-serif fst-italic" href="https://twitter.com/AloAlo_Bahia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer">
                      <i className="bi bi-twitter-x"></i> <strong>X</strong> <span className="op-50">AloAlo_Bahia</span>
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="btn text-joker border border-joker btn-lg border-2 rounded-pill py-1 px-3 my-1 font-700 font-serif fst-italic" href="https://www.linkedin.com/company/sitealoalobahia/" target="_blank" rel="noreferrer">
                      <i className="bi bi-linkedin"></i> <strong>LinkedIN</strong> <span className="op-50">sitealoalobahia</span>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 border-top border-dark bg-joker">
          <Container>
            <Row className="g-2 row-cols-1 row-cols-lg-2">
              <Col>
                <a className="btn text-joker border border-joker btn-lg border-2 rounded-pill py-1 px-3 my-1 font-700 font-serif fst-italic w-100" href="/alo-alo-expediente/">
                  Expediente
                </a>
              </Col>
              <Col>
                <a className="btn text-joker border border-joker btn-lg border-2 rounded-pill py-1 px-3 my-1 font-700 font-serif fst-italic w-100" href="/fale-conosco/">
                  Fale Conosco
                </a>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-4 border-top border-dark bg-joker">
          <Container>
            <Row className="font-11">
              <Col md className="text-center my-auto">
                <p>
                  <a className="text-underline text-joker fw-normal opacity-75" href="/politica-de-privacidade/">
                    Política de Privacidade
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-4 border-top border-dark bg-joker">
          <Container className="mb-3">
            <Row className="font-11">
              <Col md className="text-center my-auto">
                <p className="text-joker">
                  &copy; Todos os direitos reservados.
                  <br />
                  2026 | Alô Alô Bahia
                </p>
              </Col>
              <Col md className="text-center my-auto">
                <p className="footer-font">
                  <a className="text-underline text-joker font-500" target="_blank" rel="noreferrer" href="https://agencianbz.com/">
                    <span className="lot-font font-26 font-900">NBZ</span> <br /> Agência NBZ
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
}
