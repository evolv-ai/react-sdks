import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import React, { FC } from 'react';


export const App: FC<AppProps> =
	({ Component, pageProps }) => {
		return <>
			<Head>
				<title>Evolv &raquo; NextJS SDK Demo</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#000000"/>
				<link rel="shortcut icon" href="/favicon.png"/>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
				      rel="stylesheet"
				      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
				      crossOrigin="anonymous"
				/>
				<style>{`
					.bd-placeholder-img {
						font-size: 1.125rem;
						text-anchor: middle;
						-webkit-user-select: none;
						-moz-user-select: none;
						user-select: none;
					}

					@media (min-width: 768px) {
						.bd-placeholder-img-lg {
							font-size: 3.5rem;
						}
					}

					.b-example-divider {
						height: 3rem;
						background-color: rgba(0, 0, 0, .1);
						border: solid rgba(0, 0, 0, .15);
						border-width: 1px 0;
						box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
					}

					.b-example-vr {
						flex-shrink: 0;
						width: 1.5rem;
						height: 100vh;
					}

					.bi {
						vertical-align: -.125em;
						fill: currentColor;
					}

					.nav-scroller {
						position: relative;
						z-index: 2;
						height: 2.75rem;
						overflow-y: hidden;
					}

					.nav-scroller .nav {
						display: flex;
						flex-wrap: nowrap;
						padding-bottom: 1rem;
						margin-top: -1px;
						overflow-x: auto;
						text-align: center;
						white-space: nowrap;
						-webkit-overflow-scrolling: touch;
					}

					header.text-bg-dark {
						background-color: #313638 !important;
					}
				`}
				</style>
			</Head>
			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
				crossOrigin="anonymous"
			/>
			<header className="p-3 text-bg-dark">
				<div className="container">
					<div
						className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<a href="https://evolv.ai"
						   className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
							<img className="bi me-2" src="/evolv-logo-lockup-red-white.svg" alt="Evolv"
							     style={{ height: '40px' }} />
						</a>

						<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
							<li><a href="#" className="nav-link px-2 text-white">Page 1</a></li>
							<li><a href="#" className="nav-link px-2 text-white">Page 2</a></li>
							<li><a href="#" className="nav-link px-2 text-white">Page 3</a></li>
						</ul>
					</div>
				</div>
			</header>
			<div className="col-lg-8 mx-auto p-3 py-md-5">
				<header className="d-flex align-items-center pb-3 mb-5 border-bottom">
					<span className="fs-4">NextJS SDK Demo</span>
				</header>
				<main>
					<Component {...pageProps} />
				</main>
			</div>
		</>;
	};

export default App;
