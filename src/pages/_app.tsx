import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the styles
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Disable automatic CSS addition

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
