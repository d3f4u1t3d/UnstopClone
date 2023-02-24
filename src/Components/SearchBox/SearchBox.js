import React from "react";
import styles from "./SearchBox.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <span className={styles.searchIcon}>
        <SearchIcon sx={{ fontSize: 16 }} />
      </span>
      <input
        className={styles.searchBarInput}
        type="text"
        placeholder="Search Opportunities"
      />
    </div>
  );
}

export default SearchBox;
