import MenuItem from "./MenuItem";

export default function MenuSection({ title, subtitle, items }) {
  return (
    <section className="section-menuone">
      <div className="container">
        <h2 className="heading-menu">{title}</h2>
        <h3 className="subheading-menu">{subtitle}</h3>
        <div className="grid grid--2-cols">
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
