import './App.css'
import Event from './components/Event';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';


function App() {


  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      password: "password123",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      email: "jane@example.com",
      password: "password456",
    },
    {
      id: 3,
      name: "Bob Johnson",
      username: "bobjohnson",
      email: "bob@example.com",
      password: "password789",
    },
  ];



  return (
    <>
      <Home />
      <NavBar />
      <Footer />

      <div className="container">
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
</div>

      <Event/>
    </>
  );
}

export default App;
