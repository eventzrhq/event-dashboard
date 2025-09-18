const CardTag = ({ category }: { category: string }) => {
  return (
    <div className="bg-secondary rounded-4xl px-4 py-3 grid place-items-center z-10">
      <span className="text-[0.625rem] font-semibold capitalize text-white leading-none mt-[2px]">
        {category}
      </span>
    </div>
  );
};

export default CardTag;
