import { useEffect, useState } from "react";

const meetings = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Elm St",
  },
  {
    id: 3,
    name: "Bob Johnson",
    address: "789 Oak St",
  },
];

const Home = () => {
  const [optionValue, setOptionValue] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (optionValue === 0) {
      setSelectedUser(null);
      return;
    }

    const user = meetings.filter((user) => user.id === optionValue);
    setSelectedUser(user[0]);
  }, [optionValue]);

  return (
    <>
      <div className="flex justify-between">
        <div id="select" className="flex flex-col gap-3">
          <select
            className="border min-w-32"
            value={optionValue}
            onChange={(e) => {
              setOptionValue(parseInt(e.target.value));
            }}
          >
            <option value={0}>Select a user</option>
            {meetings.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          {selectedUser && <input type="date" />}
        </div>

        <div id="selected-user">
          {selectedUser && (
            <div>
              <p>{selectedUser.name}</p>
              <p>{selectedUser.address}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
