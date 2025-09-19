import Logo from "@/components/common/Logo";
import Social from "@/components/common/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  function replaceYear(text: string) {
    const year = new Date().getFullYear();

    return text.replace("{year}", year.toString());
  }

  return (
    <footer>
      <div className="container">
        <div className="pb-11 border-b border-white/10">
          <div className="flex flex-col xl:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-y-8 lg:flex-row items-start lg:items-center">
              <Logo />

              <div className="w-[1px] bg-white h-5 hidden lg:block mx-8"></div>
              {config.params.footer_description && (
                <p
                  className="xl:max-w-[420px]"
                  dangerouslySetInnerHTML={markdownify(
                    config.params.footer_description,
                  )}
                />
              )}
            </div>
            {menu.footer_main_links && (
              <ul className="flex flex-col sm:flex-row flex-wrap gap-8">
                {menu.footer_main_links.map((item, i: number) => (
                  <li key={i}>
                    <Link
                      href={item.url}
                      className="flex items-center gap-x-1 hover:text-white transition-colors duration-300"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="pt-11 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            <div className="order-2 lg:order-1">
              <p
                className="mb-1.5"
                dangerouslySetInnerHTML={markdownify(
                  replaceYear(config.params.copyright),
                )}
              />
            </div>
            <div className="order-1 lg:order-2">
              {menu.footer_main_links && (
                <ul className="flex flex-col sm:flex-row flex-wrap gap-8">
                  {menu.footer_quick_links.map((item, i: number) => (
                    <li key={i}>
                      <Link
                        href={item.url}
                        className="flex items-center gap-x-1 hover:text-white transition-colors duration-300"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="order-3 lg:order-3">
              <Social
                source={social.main}
                className="text-white flex items-center gap-5"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
