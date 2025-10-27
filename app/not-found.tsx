"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import css from "./Home.module.css";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <main>
        <h1 className={css.title}>404 - Page not found</h1>
        <p className={css.description}>
          Sorry, the page you are looking for does not exist.
        </p>
      </main>
    </>
  );
}

export default NotFound;
