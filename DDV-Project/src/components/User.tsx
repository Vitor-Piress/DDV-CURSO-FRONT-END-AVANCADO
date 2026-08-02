type UserProps = {
  name: string;
  occupattion: string;
  onClick: () => void;
};

export const User = (props: UserProps) => {
  return (
    <li onClick={props.onClick}>
      {props.name} - {props.occupattion}
    </li>
  );
};
