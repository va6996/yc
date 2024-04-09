"use client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function EmailForm() {
  const [email, setEmail] = useState<string>();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      var address = "https://docs.google.com/forms/d/e/1FAIpQLSdneq7S0sbMNZRG0RN-ej5HHzJQoOmrn4VryiAK-WjFyowxPQ/formResponse?&submit=Submit?usp=pp_url&entry.1815455311="
      const response = await fetch(`${address}${email}`, {
        mode: "no-cors",
        method: "GET",
        cache: "no-cache",
      });

      if (response.ok || response) {
        setEmail("");
        toast.success("Thank you for joining our waitlist! 🚀");
      } else {
        setEmail("");
        toast.error("Oops! Something went wrong!");
      }
    } catch (err) {
      setEmail("");
      toast.error("Oops! Something went wrong!");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="POST" className="mt-2 max-w-sm">
        <div className="flex flex-col gap-2 lg:flex-row">
          <label className="sr-only" htmlFor="email-address">
            Email address
          </label>
          <input
            autoComplete="email"
            className="bg-chalk text-accent-500 block h-10 w-full appearance-none rounded-lg border border-zinc-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            id="email-address"
            name="email"
            placeholder="johndoe@example.com"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="flex h-10 shrink-0 items-center justify-center gap-1 rounded-lg bg-[#000F2D] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700"
            type="submit"
          >
            <span>Join the waitlist</span>
          </button>
        </div>
      </form>

      <div className="flex items-start gap-2 text-gray-500">
        <InfoCircledIcon />
        <p className="text-xs -mt-[0.5] max-w-sm">
          No worries! your data is completely safe and will only be utilized to
          provide you with updates about our product.
        </p>
      </div>
    </>
  );
}
