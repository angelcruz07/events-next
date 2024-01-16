import { Inter } from "next/font/google";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-bg-dark">
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "#FF0049" }}
        >
          <a className="navbar-brand ms-5" href="./index.html">
            <img
              src="./img/black-logo.png"
              alt="Bootstrap"
              width={40}
              height={40}
            />
          </a>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light " href="/events">
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light " href="/locales">
                  Lugares
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {children}

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}