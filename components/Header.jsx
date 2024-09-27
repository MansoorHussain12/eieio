import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

const Header = async () => {
  const client = createClient();
  const nav = await client.getSingle("global_nav");

  return (
    <div className="h-24 flex justify-center items-center font-semibold bg-greenGrey">
      <div className="container flex justify-between">
        <span className="text-xl leading-6">
          <PrismicText field={nav.data.company_name} />
        </span>
        <ul className="flex gap-8">
          {nav.data.menu_item.map((item) => (
            <li key={JSON.stringify(item)}>
              <PrismicNextLink field={item.menu_link}>
                {item.menu_label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
