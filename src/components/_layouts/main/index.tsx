import { ReactNode } from "react";

interface IMainLayout {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  return <main className="mainLayout">{children}</main>;
}
