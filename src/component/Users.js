import {useState} from 'react'

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
const defaulObject = [
  {
    id:101,
    name:'baray',
    email:'baray@gmail.com',
    phone:1245655111,
    salary:45879,
    age:40,
    
  
  
  }
]
const Users = () => {
  const [users ,setUsers] = useState(defaulObject);

  const removeEntry =(id)=>{
    const updateUsers = users.filter(item => item.id !== id)
   setUsers(updateUsers)
  }

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
          { 
           users.map((user,i) =>(
              <TableRow key={i}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.salary}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell><Button variant="contained" color="error" onClick={()=>removeEntry(user.id)}>Remove</Button></TableCell>
           </TableRow>
           ))
          }
             
          </TableBody>
        </Table>
      </Box>
    </Component>
  );
}

export default Users;
