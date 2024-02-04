import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const pages = ["Home", "Books", "About", "Contact"];
  const location = useLocation();
  const hideOnMobile = location === "/cart" ? "hidden lg:block" : "";
  const hideOnTablet = location === "/wishlist" ? "hidden md:block" : "";

  return (
    <footer className={`mt-auto shadow-inner ${hideOnMobile} ${hideOnTablet}`}>
      <div className="footer-container mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:grid-rows-4 md:gap-x-6 md:gap-y-0 md:px-8 lg:gap-x-8 lg:gap-y-2">
        <div className="bookstore-desc col-span-2 md:row-span-3">
          <h2 className="my-2 font-serif text-xl font-semibold">
            Novel Nirvana
          </h2>
          <div className="text-sm">
            <p className="my-1">
              We are an online bookstore that offers a wide selection of books
              in various genres, including fiction, non-fiction, biographies,
              and more.
            </p>
            <p>
              We provide a convenient and enjoyable shopping experience while
              offering competitive prices and excellent customer service.
            </p>
          </div>
        </div>

        <div className="about-us md:row-span-4">
          <h2 className="my-1 font-serif text-xl font-semibold">Explore</h2>
          {pages.map((page, index) => (
            <div key={index}>
              <Link
                to={
                  page.toLocaleLowerCase() === "home"
                    ? "/"
                    : page.toLocaleLowerCase()
                }
                className="text-link inline-block py-1 font-sans p-2 hover:translate-x-2 hover:text-red-400 text-gray-700"
              >
                {page}
              </Link>
            </div>
          ))}
        </div>

        <div className="services md:row-span-4">
          <h2 className="my-1 font-serif text-xl font-semibold">Contact</h2>
          <p className="mb-3 text-sm">
            Email:{" "}
            <a href="mailto:info@nextbook.com" className="text-link mt-1 block">
              novelnirvana@example.com
            </a>
          </p>
          <p className="mb-3 text-sm">
            Phone:{" "}
            <a href="tel:+9-59-50-960-70" className="text-link mt-1 block">
              +959 50-960-70
            </a>
          </p>
          <p className="mb-3 text-sm">
            Address:
            <span className="mt-1 block">
              123 Main Street, Anytown, CA 12345
            </span>
          </p>
        </div>
      </div>
      <div className="copyright-notice-container bg-skin-dark">
        <div className="copyright-notice mx-auto flex justify-center max-w-6xl flex-col items-center py-1 px-4 text-skin-base md:flex-row  md:justify-between md:px-8">
          <span>© Copyright {new Date().getFullYear()} - Novel Nirvana</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
