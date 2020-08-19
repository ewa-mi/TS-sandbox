import React, { FC, Dispatch, SetStateAction } from "react";

const Filters: FC<{
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>;
}> = ({ filters, setFilters }) => {
  const labels: string[] = ["frontend", "backend"];

  return (
    <div>
      <form>
        {labels.map((label) => (
          <div key={label}>
            <label>
              <input
                type="checkbox"
                value={label}
                onChange={() => {
                  if (filters.includes(label)) {
                    const newFilters = filters.filter(
                      (filter) => filter !== label
                    );

                    setFilters(newFilters);
                  } else {
                    const newFilters = [...filters];
                    newFilters.push(label);
                    setFilters(newFilters);
                  }
                }}
              />
              {label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Filters;
