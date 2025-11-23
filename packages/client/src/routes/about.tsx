import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import { fetchTest } from "@/utils/fetchFunctions.ts";

export const Route = createFileRoute("/about")({
  component: About,
});

export function About() {
  const {
    isPending, error, data,
  } = useQuery({
    queryKey: ["test"],
    queryFn: () => fetchTest(),
  });

  const allIngredients = [
    {
      icon: "🍅",
      label: "Tomato",
    },
    {
      icon: "🥬",
      label: "Lettuce",
    },
    {
      icon: "🧀",
      label: "Cheese",
    },
    {
      icon: "🥕",
      label: "Carrot",
    },
    {
      icon: "🍌",
      label: "Banana",
    },
    {
      icon: "🫐",
      label: "Blueberries",
    },
    {
      icon: "🥂",
      label: "Champers?",
    },
  ];

  const [tomato, lettuce, cheese] = allIngredients;
  const tabs = [tomato, lettuce, cheese];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="p-2">
      <h2>Hello from About!</h2>
      <p data-testid="status-message">
        Test data is{" "}
        {isPending && "Pending"}
        {error && "Erroring"}
        {data && "loaded!"}
      </p>
      {data && data.item}

      <div
        className={`
          flex h-[60vh] max-h-[360px] w-[480px] flex-col overflow-hidden
          rounded-xl bg-white shadow-2xl
        `}
      >
        <nav
          className={`
            h-11 rounded-t-xl border-b border-gray-200 bg-neutral-50 p-1 pt-1.5
          `}
        >
          <ul className="m-0 flex w-full list-none p-0 text-sm font-medium">
            {tabs.map(item => (
              <motion.li
                key={item.label}
                initial={false}
                animate={{
                  backgroundColor:
                                    item === selectedTab ? "#eee" : "#eee0",
                }}
                className={`
                  relative flex h-10 w-full min-w-0 flex-1 cursor-pointer
                  list-none items-center justify-between rounded-t-lg bg-white
                  p-2.5 text-gray-900 select-none
                `}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab
                  ? (
                    <motion.div
                      className={`
                        absolute inset-x-0 bottom-[-2px] h-[2px] bg-blue-500
                      `}
                      layoutId="underline"
                      id="underline"
                    />
                  )
                  : null}
              </motion.li>
            ))}
          </ul>
        </nav>
        <main className="flex flex-1 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -10,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="text-[128px]"
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
