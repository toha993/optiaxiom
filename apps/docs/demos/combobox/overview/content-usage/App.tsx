import {
  Combobox,
  ComboboxContent,
  ComboboxListbox,
  ComboboxTrigger,
} from "@optiaxiom/react/unstable";

const colors = ["Ocean", "Blue", "Purple", "Red", "Orange", "Yellow"];

export function App() {
  return (
    <Combobox defaultItems={colors}>
      <ComboboxTrigger placeholder="Select colors..." />
      <ComboboxContent>
        <ComboboxListbox />
      </ComboboxContent>
    </Combobox>
  );
}
