import React, { FormEventHandler, useEffect, useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState("");

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    getResult();
  };

  const getResult = async () => {
    console.log("search");
  };

  useEffect(() => {
    getResult();
  }, [search]);
  return (
    <div className="flex flex-col justify-around gap-10 h-full container">
      <form
        onSubmit={submit}
        className="container max-w-md sticky top-10 pb-10 px-5 sm:px-0"
      >
        <input
          className="bg-white w-full p-2 outline-none"
          type={"search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <section className="container max-w-xl overflow-y-auto grow px-1">
        <div className="bg-white h-full"></div>
      </section>
    </div>
  );
};
