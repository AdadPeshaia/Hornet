import MenuSection from "./MenuSection";

export default function Menu({ menuData }) {
  return (
    <div id="menu-container">
      {menuData.map((section, index) => (
        <MenuSection key={index} {...section} />
      ))}
    </div>
  );
}
