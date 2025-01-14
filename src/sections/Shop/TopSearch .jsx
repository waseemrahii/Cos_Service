import React, { useState } from 'react';

export default function TopSearch({ onSearch, onSort }) {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onSort(value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = event.target.search.value;
        onSearch(searchTerm);
    };

    return (
        <div className="top-search">
            <div className="row justify-content-between">
                <div className="col-lg-3">
                    <div className="input-box">
                        <select
                            className="form-select form-select-md sort_by"
                            aria-label="Default select example"
                            value={selectedOption}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select Type</option>
                            <option value="price_high_to_low">Sort By Price High to Low</option>
                            <option value="price_low_to_high">Sort By Price Low to High</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="input-group float-end">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                name="search"
                                className="form-control"
                                placeholder="Search"
                                autoComplete="off"
                            />
                            <button type="submit">
                                <i className="fal fa-search" aria-hidden="true" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
