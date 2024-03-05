import Link from "next/link";

export default function DocsOnly(){
    return <>
    
    <h1>Select the layers of docs</h1>
    <Link href="/docs/product">
        <button className="mx-4 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Single-Layer
        </button>
      </Link>

      <Link href="/docs/product/reviews">
        <button className="mx-4 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          MultiLayer
        </button>
      </Link>

    </>
}