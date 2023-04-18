import React from "react";

interface IMain {
  children: React.ReactNode;
}

function Main({ children }: IMain) {
  return (
    <main className="h-full overflow-y-auto bg-zinc-100 ">
      <div className="container mx-auto ">
        <div className="container mx-auto py-8 px-4 min-h-screen bg-zinc-100">
          {children}
        </div>
      </div>
    </main>
  );
}

export default Main;
