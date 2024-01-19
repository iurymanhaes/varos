import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import HeaderCustom from "@/components/layout/header";
import { Red_Hat_Display } from 'next/font/google';
import Footer from "@/components/layout/footer";

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="pt-BR" className={redHat.className}>    
    <body >
      <AntdRegistry>
        <HeaderCustom />
        {children}
        <Footer />
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
