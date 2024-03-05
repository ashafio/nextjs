import Link from "next/link";

export default function SecondBlog() {
  return (
    <>
      <Link href="/">
        <button className="mx-4 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Home
        </button>
      </Link>

      <h1 className="text-center text-teal-500 font-bold text-2xl">
        This is Second Blog
      </h1>
    </>
  );
}
