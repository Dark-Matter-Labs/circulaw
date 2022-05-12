import "tailwindcss/tailwind.css";
import "next-pagination/dist/index.css";
import "../global.css";

import { Provider } from "next-auth/client";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
