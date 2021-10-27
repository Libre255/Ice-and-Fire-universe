import React from "react";

interface Props {
  onClick: () => void;
}

const ExitBtn: React.FC<Props> = ({ onClick }) => (
  <div className="button" onClick={onClick} />
);

export default ExitBtn;
