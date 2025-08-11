import React, { useState, useRef, useEffect } from "react";

type BrowseMenu = {
  [section: string]: string[];
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] =
    useState<string>("USD – US Dollar");
  const browseRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const currencies: string[] = [
    "USD – US Dollar",
    "EUR – Euro",
    "GBP – British Pound",
    "BDT – Bangladeshi Taka",
    "JPY – Japanese Yen",
  ];

  const browseMenu: BrowseMenu = {
    "GET STARTED": [
      "Audiobooks",
      "Podcasts",
      "Audible Originals",
      "Sleep",
      "Latino and Hispanic voices",
      "All categories",
      "Plans & Pricing",
    ],
    "POPULAR LISTS": [
      "Bestsellers",
      "Coming Soon",
      "New Releases",
      "Best of the Best",
      "Series",
      "Authors",
      "Editors’ Picks",
      "Best of the year",
    ],
    "EXPLORE AUDIBLE": [
      "Plus Catalog",
      "Gifts",
      "Help Center",
      "About Audible",
      "Blog",
      "Sales & deals",
    ],
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      if (
        browseRef.current &&
        !browseRef.current.contains(event.target as Node)
      ) {
        setIsBrowseOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-[1020px] p-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl">Book-Store</h1>

        <div className="flex gap-4 items-center">
          {/* Currency Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer py-1 flex items-center gap-1 bg-white"
            >
              <span className="font-light">🌐 {selectedCurrency}</span>
              <span className="text-xs">▼</span>
            </div>

            {isOpen && (
              <div className="absolute mt-1 left-0 bg-white border border-gray-200 rounded-md shadow-md w-48 z-50">
                {currencies.map((currency) => (
                  <div
                    key={currency}
                    onClick={() => {
                      setSelectedCurrency(currency);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                      selectedCurrency === currency ? "bg-gray-100" : ""
                    }`}
                  >
                    {currency}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-gray-300"></div>

          {/* Sign In Button */}
          <button className="font-light hover:underline">Sign In</button>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="relative" ref={browseRef}>
          <div
            onClick={() => setIsBrowseOpen(!isBrowseOpen)}
            className="cursor-pointer py-1 flex items-center gap-1 bg-white"
          >
            <span className="font-light">Browse</span>
            <span className="text-xs">▼</span>
          </div>

          {isBrowseOpen && (
            <div className="absolute mt-1 left-0 bg-white border border-gray-200 rounded-md shadow-md w-48 z-50 max-h-60 overflow-auto">
              {Object.entries(browseMenu).map(([section, items]) => (
                <div
                  key={section}
                  className="px-4 py-2 border-b last:border-b-0"
                >
                  <h3 className="font-semibold text-sm mb-1">{section}</h3>
                  <ul className="text-sm">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="cursor-pointer hover:bg-gray-200 rounded px-1 py-0.5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 w-64 rounded px-2 py-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
