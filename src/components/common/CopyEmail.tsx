import { useState } from "react";

interface IProps {
  email: string;
}

export const CopyEmail = ({ email }: IProps) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-dot-500 px-4 py-1.5 text-sm font-semibold text-white hover:bg-dot-500 cursor-pointer"
    >
      <span role="status">{copied ? "Copied!" : "Copy email"}</span>
    </button>
  );
};
