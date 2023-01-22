import {Box ,Table,TableCell,TableHead,TableRow,Typography} from "@mui/material"

const Users = () => {
  return (
    <Box>
      <Typography variant="h4">Users</Typography>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Remove Entry</TableCell>


            </TableRow>
          </TableHead>
        </Table>
      </Box>
    </Box>
  );
}

export default Users;
