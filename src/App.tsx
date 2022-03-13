import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import './reset.css';
import {ROUTES} from "./constants";
import {AuthPage} from "./pages/Auth";
import {SearchPage} from "./pages/Search";
import {SearchItem} from "./pages/SearchItem";
import {CreateItem} from "./pages/CreateItem";
import {Listen} from "./pages/Listen";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {getUserById} from "./api/auth";
import {fetchGetUser} from "./redux/user/UserSlice";
import {Login} from "./pages/Auth/components/Login";
import {Registration} from "./pages/Auth/components/Registration";
import {Profile} from "./pages/Profile";

function App() {
    const dispatch = useAppDispatch();
    const {data} = useAppSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user_id") != null){
            dispatch(fetchGetUser(+localStorage.getItem("user_id")!));
        }
    }, [])
  return (
    <div className='App'>
      <Routes>
          <Route path={ROUTES.AUTH_LOGIN} element={<AuthPage children={<Login />} />}/>
          <Route path={ROUTES.AUTH_REGISTER} element={<AuthPage children={<Registration />} />}/>
           <Route path={ROUTES.SEARCH} element={<SearchPage />}/>
          <Route path={ROUTES.SEARCH_ID} element={<SearchItem />} />
          <Route path={ROUTES.LISTEN} element={ <CreateItem />} />
          <Route path={ROUTES.LISTEN_ID} element={ <Listen /> }/>
          <Route path={ROUTES.PROFILE} element={ <Profile /> }/>
      </Routes>
    </div>
  );
}

export default App;
