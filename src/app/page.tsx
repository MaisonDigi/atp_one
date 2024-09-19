import Image from "next/image";
import { use } from "react";

function MyButton() {
  return (
    <button> Press Me!!</button>
  );
 }
 
const user = {
  name: 'Maison Gulyas',
  imageUrl: 'data:image/jpeg;base64,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',
  imageSize: 90,
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <MyButton />   
        <Profile />
      </main>
    </div>
  );
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>

      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo Of ' + use.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
