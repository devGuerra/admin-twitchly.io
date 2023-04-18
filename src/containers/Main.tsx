import React from "react";

interface IMain {
  children: React.ReactNode;
}

function Main({ children }: IMain) {
  return (
    <main
      className="h-full overflow-y-auto "
      style={{
        backgroundColor: "#ECEDF2",
      }}
    >
      <div className="container mx-auto">
        <div className="container mx-auto py-8 px-4 min-h-screen ">
          {children}
        </div>
      </div>
    </main>
  );
}

export default Main;
