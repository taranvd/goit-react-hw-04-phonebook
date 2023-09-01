import { ButtonStyled } from 'components/ContactsList/ContactsList.style';
import { FilterContainer, Label, Input } from './ContactFilter.style';

export const ContactFilter = ({ filter, changeFilter, onClearFilters }) => {
  return (
    <FilterContainer>
      <Label>Find by contact</Label>
      <Input
        type="text"
        value={filter}
        onChange={evt => changeFilter(evt.target.value)}
      />
      <ButtonStyled type="button" onClick={onClearFilters}>
        Clear all
      </ButtonStyled>
    </FilterContainer>
  );
};
