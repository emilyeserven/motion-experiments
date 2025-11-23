import type { OptionType } from "@/components/Card";

import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command";

interface CommandKProps {
  choiceFunc: (selection: OptionType) => void;
}

export function CommandK({
  choiceFunc,
}: CommandKProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function handleSelection(choice: OptionType) {
    choiceFunc(choice);
    setOpen(false);
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => handleSelection("rock")}>Play Rock</CommandItem>
          <CommandItem onSelect={() => handleSelection("paper")}>Play Paper</CommandItem>
          <CommandItem onSelect={() => handleSelection("scissors")}>Play Scissors</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
