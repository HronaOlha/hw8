import axios from 'axios';

axios.defaults.baseURL = 'https://6453dfb6c18adbbdfeaa041f.mockapi.io/contacts';

export async function fetchContacts() {
  const contacts = await axios.get('/contacts');
  return contacts.data;
}

export async function addContacts(newContact) {
  const data = await axios.post('/contacts', newContact);
  return data.data;
}

export async function deleteContacts(id) {
  const data = await axios.delete(`/contacts/${id}`);
  return await data.data;
}

// export const fetchContacts = async () => {
//   const data = await fetch(
//     `https://6453dfb6c18adbbdfeaa041f.mockapi.io/contacts/contacts`
//   );
//   const contacts = await data.json();
//   return contacts;
// };

// export const addContacts = async newContact => {
//   const data = await fetch(
//     `https://6453dfb6c18adbbdfeaa041f.mockapi.io/contacts/contacts`,
//     {
//       method: 'POST',
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify(newContact),
//     }
//   );

//   const addedData = await data.json();
//   return await addedData;
// };

// export const deleteContacts = async id => {
//   const data = await fetch(
//     `https://6453dfb6c18adbbdfeaa041f.mockapi.io/contacts/contacts/${id}`,
//     {
//       method: 'DELETE',
//     }
//   );

//   const deleteRes = await data.json();
//   return await deleteRes;
// };
