import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { highscoresColumns as columns } from "../config/columns";

export default function HighScoreTable({ data }) {
    return (
        <>
            <TableContainer
                sx={{ maxHeight: 200, minHeight: 200, width: "300px" }}
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
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {!data || data.length === 0 ? (
                            <TableRow sx={{ height: 100 }}>
                                <TableCell colSpan={3}>
                                    <Typography
                                        variant="h5"
                                        sx={{ textAlign: "center" }}
                                    >
                                        No scores
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            data?.map((item) => (
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
                                            {item[column.field]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
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
