import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import Homepage from './components/Homepage/Homepage';
import Login from './components/Users/Login';
import PublicNavbar from './components/Navbar/PublicNavbar';
import PrivateNavbar from './components/Navbar/PrivateNavbar';
import ProctedRoute from './components/AuthRoute/ProctedRoute';
import AddPost from './components/Posts/AddPost';
import PostDetails from './components/Posts/PostDetails';
import PostLists from './components/Posts/PostLists';
import UpdatePost from './components/Posts/UpdatePost';
import PublicUserProfile from './components/Users/PublicUserProfile';
import PrivateUserProfile from './components/Users/PrivateUserProfile';
import UploadCoverImage from './components/Users/UploadCoverImage';
import UploadProfileImage from './components/Users/UploadProfileImage';
import AccountVerification from './components/Users/AccountVerification';
import PasswordResetRequest from "./components/Users/PasswordResetRequest";
import PasswordReset from './components/Users/PasswordReset';
import UpdateUser from './components/Users/UpdateUser';
import SchedulePost from './components/Posts/SchedulePost';
import Footer from './components/Footer/Footer';
import RegisterUser from './components/Users/RegisterUser';
import './App.css';

function App() {
    const { userAuth } = useSelector((state) => state?.users);
    const isLogin = userAuth?.userInfo?.token;

    return (
      <BrowserRouter>
          {isLogin ? <PrivateNavbar /> : <PublicNavbar />}

          <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<RegisterUser />}></Route>

              <Route 
                  path="/user-public-profile/:userId" 
                  element={ <ProctedRoute> <PublicUserProfile /> </ProctedRoute>}>
              </Route>

              <Route  
                  path="/add-post"  
                  element={<ProctedRoute><AddPost /></ProctedRoute>}
              >
              </Route>

              <Route
                  path="/posts/schedule/:postId"
                  element={
                    <ProctedRoute>
                      <SchedulePost />
                    </ProctedRoute>}
              >
              </Route>

              <Route  
                  path="/posts/:postId"
                  element={
                    <ProctedRoute>
                      <PostDetails />
                    </ProctedRoute>}
              >
              </Route>

              <Route 
                  path="/update-profile" 
                  element={
                    <ProctedRoute>
                      <UpdateUser /> 
                    </ProctedRoute>}
              >
              </Route>

              <Route
                  path="/forgot-password"
                  element={<PasswordResetRequest />}
              >
              </Route>

              <Route
                  path="/reset-password/:token"
                  element={<PasswordReset />}
              >
              </Route>

              <Route
                path="/user-profile"
                element={
                  <ProctedRoute>
                    <PrivateUserProfile />
                  </ProctedRoute>
                }
              >
              </Route>

              <Route
                path="/verify-account/:token"
                element={
                  <ProctedRoute>
                    <AccountVerification />
                  </ProctedRoute>
                }
              >
              </Route>

              <Route
                path="/upload-profile-image"
                element={
                  <ProctedRoute>
                    <UploadProfileImage />
                  </ProctedRoute>
                }
              >
              </Route>

              <Route
                path="/upload-cover-image"
                element={
                  <ProctedRoute>
                    <UploadCoverImage />
                  </ProctedRoute>
                }
              >
              </Route>
            <Route
              path="/posts"
              element={
                <ProctedRoute>
                  <PostLists />
                </ProctedRoute>
              }
            >
            </Route>
            <Route
              path="/posts/:postId/update"
              element={
                <ProctedRoute>
                  <UpdatePost />
                </ProctedRoute>
              }
            >
            </Route>


          </Routes>
          <Footer />
      </BrowserRouter>

    )
}

export default App;
