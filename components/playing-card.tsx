import Card from "./card";
import Image from "next/image";
import { CameraIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  Blender,
  Github,
  Instagram,
  Javascript,
  Netflix,
  Nintendoswitch,
  ReactJs,
  Sketch,
  Swift,
  Twitter,
  Typescript,
} from "@icons-pack/react-simple-icons";
import { AnimateSharedLayout, motion } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";

const items = [
  {
    name: "typescript",
    icon: <Typescript className="h-6 w-6" />,
    summary:
      "TypeScript, 最常使用的编程语言, 常搭配使用的有 Node / React / Tailwind 。",
  },
  {
    name: "swift",
    icon: <Swift className="h-6 w-6" />,
    summary:
      "Swift, 最近在学习苹果生态的程序设计, 常搭配使用的有 SwiftUI / Combine 。",
  },
  {
    name: "sketch",
    icon: <Sketch className="h-6 w-6" />,
    summary: "Sketch, 偶尔也弄弄设计, 但不太熟。",
  },
  {
    name: "blender",
    icon: <Blender className="h-7 w-7" />,
    summary: "Blender, 尝试学习过很多次, 每次都是照着教程弄一遍就放弃了。",
  },
  {
    name: "switch",
    icon: <Nintendoswitch className="h-6 w-6" />,
    summary: "有一台 Switch, 但上面很多灰, 还有一台灰更多的 PS4 。",
  },
  {
    name: "photography",
    icon: <CameraIcon className="h-7 w-7" />,
    summary: "有一台 Sony a7c, 但不知道电池还有没有电。",
  },
  {
    name: "netflix",
    icon: <Netflix className="h-6 w-6" />,
    summary: "闲暇无事的时候会看看剧, 经常使用 Netflix 和 Apple TV+。",
  },
];

export default function PlayingCard({ className }: { className?: string }) {
  const [selectedItem, setSelectedItem] = useState<
    typeof items[number] | undefined
  >();

  return (
    <Card
      className={classNames(
        "flex flex-col justify-between  bg-red-100/20 px-4 hover:-translate-y-1",
        className
      )}
    >
      <h1 className="mb-2 text-red-500/60">在玩什么</h1>
      <div className="flex items-center space-x-4 px-4">
        <AnimateSharedLayout>
          {items.map((item) => {
            const selected = selectedItem?.name === item.name;

            return (
              <div
                key={item.name}
                // Make sure the dynamic classes has added to tailwind safelist
                className={classNames(
                  "relative cursor-pointer transition-colors",
                  `hover:text-${item.name}`,
                  {
                    "text-white": selected,
                    "hover:text-white": selected,
                  }
                )}
                onClick={() => {
                  setSelectedItem(selected ? undefined : item);
                }}
              >
                {selected ? (
                  <motion.div
                    className={classNames(
                      "absolute -inset-1 -z-10 rounded",
                      `bg-${item.name}`
                    )}
                    layoutId="selected-background"
                  />
                ) : undefined}
                {item.icon}
              </div>
            );
          })}
        </AnimateSharedLayout>
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-gray-400/20 bg-white/40 p-4 dark:border-white/30 dark:bg-black/30 sm:h-24">
        <p className="opacity-70 transition-all">
          {selectedItem?.summary ?? <>君子可内敛不可懦弱，面不公可起而论之。</>}
        </p>
      </div>
    </Card>
  );
}
