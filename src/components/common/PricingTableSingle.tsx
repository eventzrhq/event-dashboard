import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

const PricingTableSingle = ({
  plan,
  audience,
  price,
  price_prefix,
  users,
  features,
  button,
  isMiddle,
}: {
  plan: string;
  audience: string;
  price: string;
  price_prefix: string;
  users: string;
  features: string[];
  button: { enable: boolean; link: string; label: string };
  isMiddle: boolean;
}) => {
  return (
    <div
      className={`px-5 rounded-4xl pt-10 ${isMiddle ? "bg-light/55 hover:bg-light transition-colors duration-300 rounded-4xl" : ""}`}
    >
      <div className="flex flex-col items-center mb-5">
        {plan && (
          <h2
            className="text-lg text-white font-medium mb-2"
            dangerouslySetInnerHTML={markdownify(plan)}
          />
        )}
        {audience && (
          <p
            className="text-sm font-light mb-6"
            dangerouslySetInnerHTML={markdownify(audience)}
          />
        )}
        <div className="flex items-center gap-x-4 h-auto mb-4">
          <span
            className="text-h5 font-normal text-white"
            dangerouslySetInnerHTML={markdownify(price_prefix)}
          />
          <h2
            className="text-h2 xl:text-h"
            dangerouslySetInnerHTML={markdownify(price)}
          />
        </div>
        {users && (
          <p
            className="text-sm font-light"
            dangerouslySetInnerHTML={markdownify(users)}
          />
        )}
      </div>

      <p className="text-h5 text-white font-medium">Main Features</p>
      <ul className="w-full">
        {features.map((feature: string, i: number) => (
          <li
            className="flex items item-center justify-between py-5 border-b border-white/20"
            key={i}
          >
            <span
              className="font-medium"
              dangerouslySetInnerHTML={markdownify(feature)}
            />
            <ImageFallback
              src="/images/icons/green_tick.svg"
              className="self-center"
              width={14}
              height={10}
              alt="green tick"
            />
          </li>
        ))}
      </ul>
      {button && button.enable && (
        <div className="py-10">
          <a
            href={button.link}
            className={`${isMiddle ? "btn w-full text-center text-white bg-primary border border-primary hover:btn-primary" : "btn w-full text-center bg-tertiary/50 text-white border border-light hover:btn-primary"}`}
          >
            {button.label}
          </a>
        </div>
      )}
    </div>
  );
};

export default PricingTableSingle;
