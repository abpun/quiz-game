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

export default function HighScoreTable({ data, columns, loading }) {
  return (
    <>
      <TableContainer
        sx={{
          maxHeight: 260,
          width: "300px",
          background: "#fff",
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
                    fontWeight: "600",
                    background: "#2196f3",
                    color: "#fff",
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
                  <TableCell colSpan={3} sx={{ background: "#fff" }}>
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
                        background: "#efefef",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {columns.map((column) => (
                      <TableCell
                        key={column.field}
                        sx={{
                          padding: 1.2,
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
