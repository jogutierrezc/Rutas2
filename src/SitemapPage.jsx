import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import {
  TopLeftGlyph,
  TopRightTicketWhisk,
  MiddleLeftMermaid,
  MiddleRightLightbulb,
  BottomLeftChurch,
  BottomRightSwirl,
} from "./TermsDecorations";
import "./TermsPage.css";
import "./SitemapPage.css";

const SECTIONS = [
  {
    title: "Menú principal",
    links: [
      { label: "Inicio", to: "/inicio" },
      { label: "Mapa", to: "/mapas" },
      { label: "Galería", to: "/galeria" },
      { label: "Acerca de", to: "/acerca-de" },
      { label: "Glosario", to: "/glosario" },
    ],
  },
  {
    title: "Explorar",
    links: [
      { label: "Ruta Patrimonial", to: "/mapas" },
      { label: "Ruta Gastronómica", to: "/mapas" },
      { label: "Ruta Mística", to: "/mapas" },
      { label: "Rutas interactivas", to: "/rutas-interactivas" },
      { label: "Glosario vallenato", to: "/glosario" },
      { label: "Galería", to: "/inicio#galeria" },
    ],
  },
  {
    title: "Cuenta",
    links: [{ label: "Mis aportes", to: "/mis-aportes" }],
  },
  {
    title: "Información",
    links: [
      { label: "Términos y condiciones", to: "/terminos-y-condiciones" },
      { label: "Términos de uso y cookies", to: "/terminos-de-uso-y-cookies" },
      { label: "Mapa del sitio", to: "/mapa-del-sitio" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "rutasvalledupar@gmail.com", to: "mailto:rutasvalledupar@gmail.com", external: true },
      { label: "Instagram", to: "https://www.instagram.com/rutasvalledupar", external: true },
      { label: "YouTube", to: "https://www.youtube.com/@RutasValledupar", external: true },
    ],
  },
];

export default function SitemapPage() {
  const navigate = useNavigate();

  return (
    <>
      <TopBar />

      <div className="terms-page">
        <div className="terms-page__paper-bg" />

        <div className="terms-page__decor terms-page__decor--tl">
          <TopLeftGlyph />
        </div>
        <div className="terms-page__decor terms-page__decor--tr">
          <TopRightTicketWhisk />
        </div>
        <div className="terms-page__decor terms-page__decor--ml">
          <MiddleLeftMermaid />
        </div>
        <div className="terms-page__decor terms-page__decor--mr">
          <MiddleRightLightbulb />
        </div>
        <div className="terms-page__decor terms-page__decor--bl">
          <BottomLeftChurch />
        </div>
        <div className="terms-page__decor terms-page__decor--br">
          <BottomRightSwirl />
        </div>

        <div className="terms-page__scroll">
          <button className="terms-page__back" onClick={() => navigate(-1)}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver
          </button>

          <div className="terms-page__header">
            <div className="terms-page__header-row">
              <span className="terms-page__tilde">~</span>
              <h1 className="terms-page__title">Mapa del sitio.</h1>
              <span className="terms-page__tilde">~</span>
            </div>
            <p className="terms-page__subtitle">Todas las secciones de Rutas de Valledupar</p>
          </div>

          <div className="sitemap-page__grid">
            {SECTIONS.map((section) => (
              <div key={section.title} className="sitemap-page__col">
                <h3 className="terms-page__section-title">{section.title}</h3>
                <ul className="sitemap-page__list">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a href={link.to} target={link.to.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.to}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="terms-page__footer">
            <button className="terms-page__btn-back" onClick={() => navigate(-1)}>
              VOLVER
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
