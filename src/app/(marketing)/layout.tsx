import { type PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="m-2 p-2 bg-gray-800">
      <h1>Marketing</h1>
      <hr className="my-2 -mx-2 border-gray-700" />
      <main>{children}</main>
    </div>
  );
}
