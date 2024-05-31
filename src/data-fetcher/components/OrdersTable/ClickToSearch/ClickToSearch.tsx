import styled from 'styled-components';

import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { useAtom } from 'jotai';
import { searchQueryAtom } from '@/data-fetcher/components/OrdersTable/state';

const ClickableStyled = styled.div`
  font-family: sans-serif;
  color: white;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  background-color: darkblue;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    box-shadow: 0px 0px 10px 1px #555;
  }
`;

export interface Props {
  item: string;
  forCustomer?: boolean;
  forDate?: boolean;
}
export const Clickable = ({ item, forCustomer, forDate }: Props) => {
  const [, setSearchQuery] = useAtom<string>(searchQueryAtom);

  return (
    <ClickableStyled
      onClick={() => {
        setSearchQuery(item);
        setTimeout(() => {
          (
            document.querySelector(
              '#searchInput',
            ) as unknown as HTMLInputElement
          ).select();
        }, 5);
      }}
    >
      {(forCustomer ?? false) && <PersonIcon />}
      {(forDate ?? false) && <CalendarMonthIcon />}
      <div>{item}</div>
    </ClickableStyled>
  );
};
export default Clickable;
