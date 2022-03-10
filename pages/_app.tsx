import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				src='https://www.googletagmanager.com/gtag/js?id=G-LVD6QELBDV'
				strategy='afterInteractive'
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-LVD6QELBDV');
          `}
			</Script>
			<Script src='https://www.google.com/recaptcha/api.js' async defer />
			{/* <Script src='https://www.google.com/recaptcha/api.js' />
			<Script id='recaptchav2'>{`
          function onSubmit(token) {
            document.getElementById('form').submit()
          }
        `}</Script> */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
