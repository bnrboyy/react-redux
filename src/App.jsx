import * as React from "react";
import "./App.css";
import { useGetAllAttractionQuery } from "./services/attraction";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import { setAttractionID } from "./store/attraction-slice";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Components */
import AttractionCard from "./components/AttractionCard";
import User from "./components/User";
import User2 from "./components/User2";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetail from "./components/movieDetails/MovieDetail";
import Footer from "./components/footer/Footer";
import { dividerClasses } from "@mui/material";
import UserList from "./components/users/UserList";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";

// function App() {
//   const { data, error, isLoading } = useGetAllAttractionQuery();
//   const dispatch = useDispatch();

//   const columns = [
//     { field: "id", headerName: "ID", width: 50 },
//     {
//       field: "coverimage",
//       headerName: "image",
//       width: 100,
//       renderCell: (params) => <Avatar src={params.value} variant="square" />,
//     },
//     { field: "name", headerName: "name", width: 150 },
//     { field: "detail", headerName: "detail", width: 500 },
//     { field: "latitude", headerName: "latitude", width: 100 },
//     { field: "longitude", headerName: "longitude", width: 100 },
//     { field: "action", headerName: "action", width: 100,
//       renderCell: (params) => <GridActionsCellItem icon={<VisibilityIcon />}
//         onClick={() => dispatch(setAttractionID(params.id))}
//       />},
//   ];

//   return (
//     <div className="App">
//       {error ? (
//         <>Oh on, there was an error</>
//       ) : isLoading ? (
//         <>Loading....</>
//       ) : data ? (
//         <>
//           <Container maxWidth="lg">
//             <div style={{ height: 400, width: "100%" }}>
//               <DataGrid
//                 rows={data}
//                 columns={columns}
//                 pageSize={5}
//                 rowsPerPageOptions={[5]}
//                 // checkboxSelection
//               />
//             </div>
//             <div>
//               <AttractionCard />
//             </div>
//           </Container>
//         </>
//       ) : null}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <>
//         <User />
//         <hr />
//         <User2 />
//       </>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////////////////

/* react-redux movies app */
// function App() {
//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/movie/:id" element={<MovieDetail />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }
//////////////////////////////////////////////////////////////////////////

/* React-redux-crud with TailwindCSS */
function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD with redux toolkit
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}
export default App;
