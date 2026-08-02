type LineProps = {
  active?: boolean;
};

export const ProgressBarLine = ({ active = false }: LineProps) => {
  return (
    <div
      className={`w-11 h-0 border-4 ${active == true ? "border-[#CC58F6]" : "border-[#D9D9D9]"}`}
    ></div>
  );
};
