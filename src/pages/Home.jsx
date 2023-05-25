import { Container, Title } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const Home = () => {
  return (
    <>
<Container>
<Title>Phonebook</Title>
<ContactForm />
<Title>Contacts</Title>
<Filter />
<ContactList />
</Container> 
    </>
  );
};

export default Home;