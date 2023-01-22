import {Box ,Table,TableBody,TableCell,TableHead,TableRow,Typography,styled} from "@mui/material"
const Component = styled(Box)`
width:80%;
margin:50px auto;
`
const Users = () => {
  return (
    <Component>
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
          <TableBody>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>Code for Interview</TableCell>
              <TableCell>example.@gmail.com</TableCell>
              <TableCell>20238</TableCell>
              <TableCell>24</TableCell>
              <TableCell>Remove</TableCell>
           </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Component>
  );
}

export default Users;
