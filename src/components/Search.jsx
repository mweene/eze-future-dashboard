export default function Search({ value, onChange }) {
  return (
    <>
      <div className="search-comp">
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            name="search"
            value={value}
            onChange={onChange}
            className="border p-1"
            placeholder="search by name or id..."
          />
        </label>
      </div>
    </>
  );
}
