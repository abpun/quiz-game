import React from "react";
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";

export default function HighScoreTable({ data, columns, loading }) {
  const theme = useTheme();

  return (
    <>
      <TableContainer
        sx={{
          maxHeight: 260,
          width: "300px",
          background: theme.palette.secondary.main,
          border: "1px solid #efefef",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sx={{
                    padding: 1.2,
                    background: theme.palette.primary.main,
                    fontWeight: "600",
                    color: "#fff",
                    textAlign: `${column.field === "_id" ? "right" : "left"}`,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {loading ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {!data || data.length === 0 ? (
                <TableRow sx={{ height: 100 }}>
                  <TableCell colSpan={3} sx={{ background: theme.palette.secondary.main }}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                      No scores
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                data?.map((item, key) => (
                  <TableRow
                    key={item._id}
                    sx={{
                      "&:hover": {
                        background: theme.palette.secondary.dark,
                        cursor: "pointer",
                      },
                    }}
                  >
                    {columns.map((column) => (
                      <TableCell
                        key={column.field}
                        sx={{
                          color: theme.palette.text.secondary,
                          padding: 1.2,
                          textAlign: `${column.field === "_id" ? "right" : "left"}`,
                        }}
                      >
                        {column.field === "_id" ? key + 1 : item[column.field]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {/* <TablePagination
                rowsPerPageOptions={[2, 3, 5, 10]}
                component="div"
                rowsPerPage={limit}
                count={totalRows}
                page={currentPage}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimit}
            /> */}
    </>
  );
}
