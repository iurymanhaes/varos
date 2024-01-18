type MenuItem = {
  title: string;
  content: string;
  icon: string;
};

type Props = {
  index: number;
  item: MenuItem;
  selected: boolean;
  onTabClick: (index?: number, item?: MenuItem) => void;
};

export default function ListItem({ index, item, selected, onTabClick }: Props) {
  const handleClick = () => {
    onTabClick(index, item);
  };

  return (
    <li
      onClick={handleClick}
      key={index}
      className={`
      rounded-[32px] text-sm text-greyC1 font-red-hat font-semibold leading-[16.8px] p-4 flex items-center gap-4 cursor-pointer ${
        selected ? "bg-varosLI" : "bg-transparent"
      }
      `}
    >
      <img src={item.icon} alt="Ícone" />
      {item.title}
    </li>
  );
}
