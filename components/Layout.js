import Head from "next/head";

function Layout({ children, title = "Default title" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white text-gray-800 font-mono bg-gray-900">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-1 justify-center items-center w-screen flex-col bg-red">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        @kekeke 2022
      </footer>
    </div>
  );
}

export default Layout;
