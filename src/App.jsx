import { createBrowserRouter, RouterProvider, } from "react-router";
// import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import ViewBook from "./pages/ViewBook";
import EditBook from "./pages/EditBook";
import NotFound from "./pages/NotFound";


const bookieAppRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/books', element: <Books /> },
  { path: '/add-book', element: <AddBook /> },
  { path: '/view-book', element: <ViewBook /> },
  { path: '/edit-book', element: <EditBook /> },
  // { path: '/sign-up', element: <SignUp/> },
  { path: '*', element: <NotFound /> },
]);



function App() {

  return (
    <>
       <RouterProvider router={bookieAppRouter} />
    </>
  );
}

export default App
