import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [
    {
      id: 0,
      name: "James Adam",
      position: "Frontend Developer",
      status: "Online",
      country: "USA",
    },
    {
      id: 1,
      name: "Adam Steve",
      position: "Backend Developer",
      status: "Offline",
      country: "India",
    },
    {
      id: 2,
      name: "Alice Johnson",
      position: "Software Developer",
      status: "Online",
      country: "England",
    },
    {
      id: 3,
      name: "Bob Smith",
      position: "System Analyst",
      status: "Online",
      country: "Australia",
    },
    {
      id: 4,
      name: "Charlie Brown",
      position: "Database Administrator",
      status: "Offline",
      country: "Tanzania",
    },
    {
      id: 5,
      name: "Diana Prince",
      position: "Frontend Developer",
      status: "Online",
      country: "USA",
    },
    {
      id: 6,
      name: "Ethan Hunt",
      position: "Backend Developer",
      status: "Offline",
      country: "Pakistan",
    },
    {
      id: 7,
      name: "Fiona Gallagher",
      position: "DevOps Engineer",
      status: "Online",
      country: "Nepal",
    },
    {
      id: 8,
      name: "George Martin",
      position: "Full Stack Developer",
      status: "Offline",
      country: "Sri Lanka",
    },
    {
      id: 9,
      name: "Hannah Baker",
      position: "Software Tester",
      status: "Offline",
      country: "West Indies",
    },
    {
      id: 10,
      name: "Ian Fleming",
      position: "Security Analyst",
      status: "Online",
      country: "Canada",
    },
    {
      id: 11,
      name: "Jane Austen",
      position: "UX/UI Designer",
      status: "Online",
      country: "New Zealand",
    },
    {
      id: 12,
      name: "Kevin Hart",
      position: "Mobile App Developer",
      status: "Online",
      country: "Latvia",
    },
    {
      id: 13,
      name: "Laura Palmer",
      position: "Cloud Engineer",
      status: "Offline",
      country: "France",
    },
    {
      id: 14,
      name: "Michael Scott",
      position: "IT Support Specialist",
      status: "Offline",
      country: "Brazil",
    },
    {
      id: 15,
      name: "Nina Simone",
      position: "Data Scientist",
      status: "Offline",
      country: "Portugal",
    },
    {
      id: 16,
      name: "Oscar Wilde",
      position: "Machine Learning Engineer",
      status: "Online",
      country: "Trinidad and Tobago",
    },
    {
      id: 17,
      name: "Paul McCartney",
      position: "AI Researcher",
      status: "Online",
      country: "Spain",
    },
    {
      id: 18,
      name: "Quincy Jones",
      position: "Blockchain Developer",
      status: "Offline",
      country: "Mexico",
    },
    {
      id: 19,
      name: "Rachel Green",
      position: "Product Manager",
      status: "Online",
      country: "Egypt",
    },
    {
      id: 20,
      name: "Steve Rogers",
      position: "Scrum Master",
      status: "Offline",
      country: "Albania",
    },
    {
      id: 21,
      name: "Tina Turner",
      position: "Technical Writer",
      status: "Offline",
      country: "Austria",
    },
    {
      id: 22,
      name: "Uma Thurman",
      position: "Game Developer",
      status: "Online",
      country: "Belgium",
    },
    {
      id: 23,
      name: "Victor Hugo",
      position: "Embedded Systems Engineer",
      status: "Online",
      country: "Bolivia",
    },
    {
      id: 24,
      name: "Wendy Darling",
      position: "Network Engineer",
      status: "Offline",
      country: "China",
    },
    {
      id: 25,
      name: "Xander Cage",
      position: "Robotics Engineer",
      status: "Online",
      country: "Japan",
    },
    {
      id: 26,
      name: "Yara Shahidi",
      position: "Software Architect",
      status: "Offline",
      country: "Costa Rica",
    },
    {
      id: 27,
      name: "Zane Grey",
      position: "IT Consultant",
      status: "Offline",
      country: "Germany",
    },
    {
      id: 28,
      name: "Ava Gardner",
      position: "Web Developer",
      status: "Online",
      country: "Jamaica",
    },
    {
      id: 29,
      name: "Bruce Wayne",
      position: "Cybersecurity Specialist",
      status: "Active",
      country: "Malaysia",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state, action) => {
      state.userData = state.userData.filter(
        item => item.id != action.payload.id
      );
    },
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
