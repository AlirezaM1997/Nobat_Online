const users = [
  {
    id: "01",
    username: "Homan",
    password: "12345678",
    fullName: "هومن آقچه لو",
    city: "تهران",
    birthDate: { day: 1, month: 1, year: 1370 },
    joined: "February 06, 2017",
    educationRate: "سیکل",
    email: "example1@gmail.com",
    gender: "male",
    phoneNumber: "09124540120",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    credit: 100000,
    allApointments: {
      history: [
        {
          id: "1",
          cancel: false,
          date: "1401032510AM",
        },
        {
          id: "2",
          cancel: true,
          date: "1401032510AM",
        },
        {
          id: "3",
          cancel: false,
          date: "1401032510AM",
        },
      ],
      reserved: [
        {
          uniqId: 4521852882,
          id: "7",
          cancel: false,
          date: "1401032510AM",
        },
        {
          uniqId: 7841852482,
          id: "10",
          cancel: false,
          date: "1401052512AM",
        },
      ],
    },
  },
];
export default users;
