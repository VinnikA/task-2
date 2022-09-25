import { topTableTitles, bottomTableTitles } from "../../../constants";

type TableHeaderProps = {
  position: string
}

const TableHeader: React.FC<TableHeaderProps> = ({position}) => {
  const styleMod = `table__header table__header_${position}`;
  let notes = position === 'top' ? topTableTitles : bottomTableTitles;

  return (
    <div 
      className={styleMod}>
        {notes.map(item => <div key={item} className="table__title">{item}</div>)}
    </div>
  )
}

export default TableHeader;

// function tableHeader(state, position) {
//   const styleMod = `table__header_${position}`;
//   const header = element('div', `table__header ${styleMod}`);
//   for (const item of state) {
//     const el = element('div', 'table__title', item);
//     header.append(el);
//   }
//   if(position === 'top') {
//     const block = element('div', 'table__title table__title_last', '');
//     block.append(iconBlock());
//     header.append(block);
//   }
//   return header;
// };