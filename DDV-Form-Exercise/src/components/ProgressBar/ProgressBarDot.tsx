type DotProps = {
  active?: boolean;
};

export const ProgressBarDot = ({ active = false }: DotProps) => {
  return (
    <div
      className={`rounded-full w-10 h-10 ${active == true ? "bg-[#CC58F6]" : "bg-[#D9D9D9]"}`}
    ></div>
  );
};
