import React, { useState } from "react";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Stack, StackItem } from "office-ui-fabric-react/lib/Stack";
import { TextField } from "office-ui-fabric-react/lib/TextField";

import onEnter from "./onEnter";

export type SearchbarProps = {
  onSearch: (searchTerm: string) => void;
}

export default function Searchbar({ onSearch }: SearchbarProps) {
  const [value, setValue] = useState<string>();

  const handleSearch = () => value && onSearch(value);

  return <Stack horizontal>
    <StackItem grow>
      <TextField placeholder="Search for a GIF..." value={value} onKeyPress={onEnter(handleSearch)} onChange={(_, newValue) => setValue(newValue)} />
    </StackItem>
    <PrimaryButton onClick={handleSearch}>Search</PrimaryButton>
  </Stack>;
}