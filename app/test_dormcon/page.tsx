import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div>
            <iframe src="trexdormcon.com" width="600" height="400">
                <p>your web browser may or may not support iframes</p>
            </iframe>
        </div>
    </div>
  );
}
