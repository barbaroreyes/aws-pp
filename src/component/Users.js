

import {Box ,Table,TableBody,TableCell,TableHead,TableRow,Typography,styled ,Button} from "@mui/material"
const Component = styled(Box)`
width:80%;
margin:50px auto;
& > h4{
  margin-bottom:20px;
}
& > div> table > thead{
  background-color:#000;
  font-weight: 600;
}
& > div> table > thead >tr >th{
  color:#fff;
  font-size:16px;
}
& > div> table > tbody >tr >th{
  font-size:16px;
}
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
              <TableCell><Button variant="contained" color="error">Remove</Button></TableCell>
           </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Component>
  );
}

export default Users;
