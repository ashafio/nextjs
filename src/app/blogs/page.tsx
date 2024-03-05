import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Link href="/">
        <button className="mx-4 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Home
        </button>
      </Link>

      <h1 className="text-center text-teal-500 font-bold text-2xl">
        Select A Blog
      </h1>

      <div className="flex justify-center items-center">
      <Link href="/blogs/first">
        <button className="mx-4 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          First Blog
        </button>
      </Link>

      <Link href="/blogs/second">
        <button className="mx-4 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Second Blog
        </button>
      </Link>
      </div>

    </>
  );
}
