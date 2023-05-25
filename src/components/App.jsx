import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';
import Register from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

// const Home = lazy(() => import('../pages/Home'));
// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
// const NotFound = lazy(() => import('../pages/NotFound'));

// <Container>
//   <Title>Phonebook</Title>
//   <ContactForm />
//   <Title>Contacts</Title>
//   <Filter />
//   <ContactList />
// </Container>
