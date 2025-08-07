import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={101}
        siblingCount={1}
        boundaryCount={1}

        sx={{
          "& .MuiPaginationItem-root": {
            fontSize: "1.4rem",
            marginTop: "3rem",
            color: "#666",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#4A2682 !important",
            color: "#fff !important",
          },
          "& .MuiPaginationItem-previousNext": {
            "& svg": {
              width: "3.9333rem",
              height: "2.8667rem",
              fill: "#FF8E2B",
              color: "#FF8E2B",
            },
          },
        }}
      />
    </Stack>
  );
}
