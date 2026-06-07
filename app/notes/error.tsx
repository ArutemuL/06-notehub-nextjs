"use client";

import css from "./error.module.css";

interface ErrorMessageProps {
  error?: Error | null;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className={css.wrapperError}>
      <p className={css.errorMessage}>
        {error?.message ?? "Oops! Something went wrong. Try again."}
      </p>
    </div>
  );
}