import Card from "./card";
import Image from "next/image";
import {
  ArrowPathRoundedSquareIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import avatar from "../public/avatar.png";
import twitterVerified from "../public/twitter-verified.svg";
import BackgroundGradient from "./background-gradient";
import FlippableCard from "./flippable-card";
import { useCallback, useState } from "react";
import classNames from "classnames";

export default function ProfileCard({ className }: { className?: string }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = useCallback(() => {
    setFlipped(!flipped);
  }, [flipped]);

  return (
    <FlippableCard
      className={classNames("relative", className)}
      front={
        <Card className="flex h-full flex-col items-center justify-center bg-indigo-200/10 py-40 sm:py-20">
          <Image className="h-16 w-16 rounded-full" src={avatar} alt="Avatar" />
          <p className="relative mt-2 items-end text-xl">
            Bruce Hu
            <Image
              className="absolute top-0 bottom-0 -right-6 my-auto h-5 w-5"
              // ?
              src={twitterVerified.src}
              height={100}
              width={100}
              alt="Twitter Verified"
            />
          </p>
          <p className="mt-2 opacity-60">一个数码爱好者，写博客的人</p>

          <button
            className="absolute right-5 bottom-5 rounded-full border border-gray-400/20 bg-white/40 p-3 dark:border-white/30 dark:bg-black/40"
            onClick={() => toggle()}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5 opacity-60" />
          </button>
        </Card>
      }
      back={
        <Card className="flex h-full flex-col items-center justify-center bg-violet-200/10">
          <div>
            <p>写博客的人</p>

            <p className="mt-3">大学生</p>
            <p className="">喜欢阅读、听音乐、写博客。</p>

          </div>

          <button
            className="absolute right-5 bottom-5 rounded-full border border-gray-400/20 bg-white/30 p-3 dark:border-white/30 dark:bg-black/40"
            onClick={() => toggle()}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5 opacity-60" />
          </button>
        </Card>
      }
      flipped={flipped}
    >
      <BackgroundGradient className="bottom-0 right-0 h-36 w-16 bg-green-500/50 duration-500 dark:bg-amber-400/50" />
    </FlippableCard>
  );
}
