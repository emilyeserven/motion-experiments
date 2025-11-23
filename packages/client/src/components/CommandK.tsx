import type { OptionType } from "@/components/Card";
import type { Dispatch, SetStateAction } from "react";

import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList, CommandSeparator,
} from "@/components/command";

interface CommandKProps {
  choiceFunc: (selection: OptionType) => void;
  setIsCardsShown: Dispatch<SetStateAction<boolean>>;
  isCardsShown: boolean;
  setIsResultsShown: Dispatch<SetStateAction<boolean>>;
  isResultsShown: boolean;
}

export function CommandK({
  choiceFunc,
  setIsCardsShown,
  isCardsShown,
  setIsResultsShown,
  isResultsShown,
}: CommandKProps) {
  const [open, setOpen] = useState(false);
  const [isKeepMenuOpen, setIsKeepMenuOpen] = useState(false);

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
    if (!isKeepMenuOpen) {
      setOpen(false);
    }
  }

  function handleCardsShownClicked() {
    setIsCardsShown(!isCardsShown);
    if (!isKeepMenuOpen) {
      setOpen(false);
    }
  }

  function handleResultsShownClicked() {
    setIsResultsShown(!isResultsShown);
    if (!isKeepMenuOpen) {
      setOpen(false);
    }
  }

  function handleKeepMenuOpen() {
    setIsKeepMenuOpen(!isKeepMenuOpen);
    if (isKeepMenuOpen) {
      setOpen(false);
    }
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Play">
          <CommandItem onSelect={() => handleSelection("rock")}>Rock</CommandItem>
          <CommandItem onSelect={() => handleSelection("paper")}>Paper</CommandItem>
          <CommandItem onSelect={() => handleSelection("scissors")}>Scissors</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => handleCardsShownClicked()}>{isCardsShown ? "Hide" : "Show"} Cards</CommandItem>
          <CommandItem onSelect={() => handleResultsShownClicked()}>{isResultsShown ? "Hide" : "Show"} Results</CommandItem>
          <CommandItem onSelect={() => handleKeepMenuOpen()}>{isKeepMenuOpen ? "Do Not" : "Do"} Keep Menu Open</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
