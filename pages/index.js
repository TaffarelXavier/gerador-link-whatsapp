import React, { useRef, useEffect } from "react";
import Head from "next/head";
import gerarLinkWhatsapp from "../utils/gerarLinkWhatsapp";

export default function Home() {
  const refInputCelular = useRef(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = document.getElementById("form-gerar-link-whatsapp");
    gerarLinkWhatsapp(form.celular.value, form.mensagem.value);
  };

  useEffect(() => {
    refInputCelular.current.focus();
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/style.min.css" />
      </Head>
      <header className="header">
        <div className="header-content">
          <div className="nav">
            <img src="/abrir-whats.svg" alt=""/>
          </div>
        </div>
      </header>
      <div className="main">
        <h1>Gerador de Link para Whatsapp</h1>
        <hr />
        <form onSubmit={handleSubmit} id="form-gerar-link-whatsapp">
          <div className="form-group">
            <label htmlFor="">NÚMERO DO CELULAR</label>
            <input
              type="text"
              name="celular"
              placeholder="(DDD) 0 0000-000"
              autoFocus
              required
              className="form-control"
              ref={refInputCelular}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">MENSAGEM</label>
            <textarea
              type="text"
              name="mensagem"
              placeholder="Escreva o texto"
              className="form-control"
              rows={3}
            />
          </div>
          <button className="btn-whatsapp">ABRIR WHATS</button>
        </form>
        <hr />
        <h2>Como funciona</h2>
        <ul>
          <li>Insira o nº do WhatsApp Ex: 85 9 9660-5866</li>
          <li>Escreva a mensagem padrão que será exibida</li>
          <li>Clique em "ABRIR WHATS"</li>
        </ul>
      </div>
    </>
  );
}
