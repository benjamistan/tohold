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
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
