import Nav from "./Nav";

export default function Layout({
  children,
}) {
  return (
    <main>
        <Nav />
        <section>
            {children}
        </section>
    </main>
  );
}
