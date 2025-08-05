import React, { useState, useMemo, useEffect } from "react";
import { TextField, Paper, List, ListItem, ListItemText } from "@mui/material";
import { useEventsContext } from "../../context/EventsContext";
import styles from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
  const { events } = useEventsContext();
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("events arrived in searchbar: ", events);
  }, [events]);

  const filteredEvents = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return [];

    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        (event.venue?.name?.toLowerCase() || "").includes(query)
    );
  }, [search, events]);

  return (
    <div className={styles.searchBarContainer}>
      <TextField
        fullWidth
        size="small"
        placeholder="Search events"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchField}
      />
      {search && filteredEvents.length > 0 && (
        <Paper className={styles.resultBox} elevation={3}>
          <List>
            {filteredEvents.slice(0, 5).map((event) => (
              <ListItem key={event._id} button>
                <ListItemText
                  primary={event.title}
                  secondary={event.venue?.name}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;
