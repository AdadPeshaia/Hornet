export default function MenuItem({ name, price, description }) {
  return (
    <div className="menu-description border">
      <h3 className="heading-tertiary">
        {name} <span className="subheading">{`${price} kr`}</span>
      </h3>
      <p>{description}</p>
    </div>
  );
}
