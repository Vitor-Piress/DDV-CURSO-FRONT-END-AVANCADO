import { Card, Category, Colors, Position } from "../components/Card";

export const CardShowCase = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <Card
          category={Category.BASIC}
          picked={Colors.DEFAULT}
          position={Position.LEFT}
        ></Card>
      </div>
      <div className="z-50">
        <Card category={Category.STANDARD} picked={Colors.PICKED}></Card>
      </div>
      <div className="">
        <Card
          category={Category.PREMIUM}
          picked={Colors.DEFAULT}
          position={Position.RIGHT}
        ></Card>
      </div>
    </div>
  );
};
