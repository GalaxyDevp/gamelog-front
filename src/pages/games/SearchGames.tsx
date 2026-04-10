import { SearchField } from "@heroui/react";
import { useState } from "react";

const SearchGames = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <SearchField
      name="secondary-search"
      variant="secondary"
      value={value}
      onChange={setValue}
    >
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input
          className="w-[280px]"
          placeholder="Search a game..."
        />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
};
export default SearchGames;
