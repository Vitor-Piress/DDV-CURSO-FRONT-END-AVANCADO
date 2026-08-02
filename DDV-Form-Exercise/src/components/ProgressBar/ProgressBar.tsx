import { Fragment } from "react";
import { ProgressBarDot } from "./ProgressBarDot";
import { ProgressBarLine } from "./ProgressBarLine";

type ProgressBarProps = {
  lenght?: number;
  actualLenght?: number;
};

export const ProgressBar = ({
  lenght = 4,
  actualLenght = 1,
}: ProgressBarProps) => {
  const totalSteps = Math.max(1, lenght);
  const activeSteps = Math.max(0, Math.min(actualLenght, totalSteps));

  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: totalSteps }, (_, index) => {
        const isActive = index + 1 <= activeSteps;
        const isLineActive = index + 1 < activeSteps;

        return (
          <Fragment key={index}>
            <ProgressBarDot active={isActive}></ProgressBarDot>
            {index < totalSteps - 1 && (
              <ProgressBarLine active={isLineActive}></ProgressBarLine>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
