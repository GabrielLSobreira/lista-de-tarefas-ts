import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  item: Item;
  handleDelete: (item: Item) => void;
  onChange: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, handleDelete, onChange }: Props) => {
  return (
    <C.Container done={item.done}>
      <div>
        <input
          type="checkbox"
          checked={item.done}
          onChange={(e) => onChange(item.id, e.target.checked)}
        />
        <label>{item.name}</label>
      </div>
      <button onClick={() => handleDelete(item)}>❌</button>
    </C.Container>
  );
};
