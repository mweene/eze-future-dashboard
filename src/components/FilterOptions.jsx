export default function FilterOptions() {
  return (
    <>
      <div className="border border-neutral-300 rounded-2xl p-8 bg-white absolute top-0 left-0 z-20 grid mt-10 ml-60">
        {filters.map((item) => (
          <button key={item.id}>{item.name}</button>
        ))}
      </div>
    </>
  );
}

const filters = [
  { id: 0, name: "site" },
  { id: 1, name: "price range" },
  { id: 2, name: "payments" },
  { id: 3, name: "date" },
  { id: 4, name: "allocated" },
  { id: 5, name: "authorized" },
];
