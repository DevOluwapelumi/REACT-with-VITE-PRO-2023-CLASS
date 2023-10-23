import './App.css'
import Button from './components/Props/Button';


function App() {


  // const users = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     username: "johndoe",
  //     email: "john@example.com",
  //     password: "password123",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     username: "janesmith",
  //     email: "jane@example.com",
  //     password: "password456",
  //   },
  //   {
  //     id: 3,
  //     name: "Bob Johnson",
  //     username: "bobjohnson",
  //     email: "bob@example.com",
  //     password: "password789",
  //   },
  // ];



  return (
      <>
          <Button name="Edit" lastname="Oluwapelumi" style="text-red-400 rounded-md border px-4 py-2 my-4 mx-10"/>
          <Button name="Delete" lastname="Pelumi" style="text-green-400 rounded-md bg-gray-200 border px-8 py-2 my-4 mx-10"/>
      {/* <Weather/> */}
      {/* <Home /> */}
      {/* <Fetch/> */}
      {/* <NavBar /> */}
      {/* <Footer /> */}

      {/* <div className="container">
    <div className="well">
        <table className="table table-bordered table-striped">
            <thead>
                <tr className='bg-dark'>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <button className="btn btn-secondary">Edit</button>
                            <button className="btn btn-danger ms-5">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div> */}


      {/* <Event/> */}
    </>
  );
}

export default App;
