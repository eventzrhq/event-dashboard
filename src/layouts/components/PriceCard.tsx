import { markdownify } from "@/lib/utils/textConverter";

const PriceCard = ({
  plan,
  audience,
  price_prefix,
  price,
  users,
  features,
  button,
  isMiddle,
}: {
  plan: string;
  audience: string;
  price_prefix: string;
  price: string;
  users: string;
  features: string[];
  button: { enable: boolean; label: string; link: string };
  isMiddle: boolean;
}) => {
  return (
    <div
      className={`inside-shadow shadow-shadow/50 hover:shadow-shadow transition-[colors_shadows] duration-500 border border-border rounded-4xl p-8 flex flex-col h-full ${isMiddle ? "bg-light/55 hover:bg-light" : ""}`}
    >
      <div className="pb-5 border-b-[2px] border-border/60 mb-5">
        <p
          className="font-medium text-lg text-white"
          dangerouslySetInnerHTML={markdownify(plan)}
        />
        <p
          className="text-sm font-light"
          dangerouslySetInnerHTML={markdownify(audience)}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow gap-y-10 items-start">
        <div className="flex flex-col gap-y-10 items-start">
          <div>
            <h3 className="flex items-center gap-x-1 mb-1">
              <span>{price_prefix}</span>
              <span
                className="data-count"
                data-count-yearly={price}
                data-count-monthly={price}
                dangerouslySetInnerHTML={markdownify(price)}
              />
            </h3>
            <p
              className="text-sm font-light"
              dangerouslySetInnerHTML={markdownify(users)}
            />
          </div>
          <ul className="text-sm font-light green-tick-list">
            {features.map((feature: string, i: number) => (
              <li key={i} dangerouslySetInnerHTML={markdownify(feature)} />
            ))}
          </ul>
        </div>
        {button && button.enable && (
          <a
            className="btn btn-primary rounded-full mt-auto"
            href={button.link}
          >
            {button.label}
          </a>
        )}
      </div>
    </div>
  );
};

export default PriceCard;
