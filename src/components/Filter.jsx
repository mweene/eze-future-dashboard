import { useState } from "react";
import Button from "./simple/Button";

export default function Filter({
  isOpen,
  onClose,
  onClick,
  onFilter,
  onClearFilter,
}) {
  const [location, setLocation] = useState("");
  const handleClick = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="filter-comp">
      <Button className="relative" onClick={onClick}>
        filters
      </Button>

      {isOpen && (
        <div className="filter-model absolute top-0 mt-14 p-4 bg-white border">
          <Button onClick={onClose}>close</Button>
          <form
            action=""
            onSubmit={(e) => onFilter(e, location)}
            className="[&>input]:p-1 mt-4"
          >
            <fieldset>
              <legend>filter by site name:</legend>

              <div className="">
                <input
                  type="radio"
                  id="site 1"
                  value="site 1"
                  name="sites"
                  onClick={handleClick}
                />
                <label htmlFor="sites">site 1</label>
              </div>
              <div className="">
                <input
                  type="radio"
                  id="site 2"
                  value="site 2"
                  name="sites"
                  onClick={handleClick}
                />
                <label htmlFor="sites">sites 2</label>
              </div>
              <div className="">
                <input
                  type="radio"
                  id="sites 3"
                  value="site 3"
                  name="sites"
                  onClick={handleClick}
                />
                <label htmlFor="sites">site 3</label>
              </div>
              <div className="">
                <input
                  type="radio"
                  id="site 12"
                  value="site 12"
                  name="sites"
                  onClick={handleClick}
                />
                <label htmlFor="sites">site 12</label>
              </div>
            </fieldset>
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                onClick={() => {
                  setLocation("");
                  onClearFilter();
                }}
              >
                clear filters
              </Button>
              <Button type="submit">apply filters</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
