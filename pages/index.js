import Link from "next/link";

export default () => {
  return (
    <div>
      <p>Hello world!! this is our next js app!!!!!!</p>
      <div>
        <Link href="/list-cats">
          <button>Check my list of cats</button>
        </Link>
      </div>
    </div>
  );
};
