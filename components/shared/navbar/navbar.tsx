import Image from "next/image";
import { fetchEntries } from "@/lib/contentful";
import { NavbarLink } from "@/types";
import { Link } from "@/components/global/link";
import { getLocale } from "@/lib/get-locale";

export const Navbar = async function () {
  const lang = await getLocale();
  const navbarLinks = (await fetchEntries("navbar", lang)) as NavbarLink[];

  return (
    <div className="bg-white py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link href={`/`}>
              <Image src="/logo.svg" alt="logo" width={181} height={60.5} />
            </Link>
          </div>
          <div className="items-center gap-4 hidden lg:flex">
            {navbarLinks.map((link) => (
              <Link key={link.sys.id} href={link.fields.link!}>
                {link.fields.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
