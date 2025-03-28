"use client";

import {
  Combobox,
  ComboboxCheckboxItem,
  ComboboxContent,
  ComboboxScrollArea,
  ComboboxTrigger,
} from "@optiaxiom/react/unstable";

const colors = ["Ocean", "Blue", "Purple", "Red", "Orange", "Yellow"];

export function App() {
  return (
    <Combobox defaultItems={colors}>
      <ComboboxTrigger placeholder="Select colors..." />
      <ComboboxContent>
        <ComboboxScrollArea>
          {(item) => (
            <ComboboxCheckboxItem item={item}>{item}</ComboboxCheckboxItem>
          )}
        </ComboboxScrollArea>
      </ComboboxContent>
    </Combobox>
  );
}
