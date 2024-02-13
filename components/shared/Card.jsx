import Image from "next/image";

const Card = ({ avatar, name }) => {
  return (
    <div className="info">
      <Image src={avatar} alt="avatar image" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
