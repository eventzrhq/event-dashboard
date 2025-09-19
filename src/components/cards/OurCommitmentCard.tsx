import { markdownify } from "@/lib/utils/textConverter";
import SvgWindspeedLogo from "@/components/svgs/SvgWindspeedLogo";

const OurCommitmentCard = ({
  title,
  description,
  aosDelay,
}: {
  title?: string;
  description?: string;
  aosDelay?: number;
}) => {
  return (
    <div
      data-aos="fade-up-sm"
      data-aos-delay={aosDelay || 0}
      className="flex justify-center items-center w-full h-full"
    >
      <div className="border border-border inside-shadow p-10 rounded-4xl flex flex-col items-center gap-4 text-center w-full h-full">
        <div className="w-[60px] h-[60px] bg-light rounded-full grid place-items-center text-primary">
          <SvgWindspeedLogo />
        </div>
        <h3
          className="text-h5"
          dangerouslySetInnerHTML={markdownify(title || "")}
        />
        <p
          className="text-sm"
          dangerouslySetInnerHTML={markdownify(description || "")}
        />
      </div>
    </div>
  );
};

export default OurCommitmentCard;
