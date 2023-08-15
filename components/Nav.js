import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();
    const isAbout = router.pathname === "/";
    const isPrinciples = router.pathname === "/principles";
    const isBooks = router.pathname === "/books";
    const isArmenia = router.pathname === "/armenia";
    return (
      <header>
          <ul>
            <li>
                <Link className={isAbout && 'font-semibold'} href="/">About</Link>
            </li>
            <li>
                <Link className={isBooks && 'font-semibold'} href="/books">Books</Link>
            </li>
            <li>
                <Link className={isPrinciples && 'font-semibold'} href="/principles">Principles</Link>
            </li>   
            <li>
                <Link className={isArmenia && 'font-semibold'} href="/armenia">Armenia</Link>
            </li>
          </ul>
      </header>
    );
  }
  