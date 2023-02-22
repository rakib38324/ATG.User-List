import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Home = () => {
  const [usersList, setUsersList] = useState([]);
  const [usersdetails, setUsersDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((user) => {
        setLoading(false);
        setUsersList(user.data);
      });
  }, []);

  //   console.log(usersList);
  //   console.log(usersdetails);

  const handleUser = (id) => {
    console.log(id);

    axios
      .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
      .then((user) => {
        setLoading(false);
        console.log(user.data);
        setUsersDetails(user.data);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {/* <Loading></Loading> */}

      <div className="lg:grid lg:grid-cols-2 gap-10 mt-10">
        {/* User List Section */}

        <div>
          <p className="w-full mb-5  lg:sticky top-0 shadow-2xl bg-blue-300 text-4xl text-center py-5 rounded-lg font-bold hover:bg-blue-800 hover:text-white">
            USER LIST
          </p>

          {usersList?.length &&
            usersList.map((user) => (
              <div
                className="w-full flex shadow-md bg-blue-200 border-2 border-blue-300 my-2 rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-900"
                key={user.id}
                onClick={() => handleUser(user.id)}
              >
                {<img
                  className="w-2/12  rounded-full p-3"
                  src={user.avatar}
                  alt="profile"
                /> ? (
                  <img
                    className="w-2/12  rounded-full p-3"
                    src={user.avatar}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-2/12  rounded-full "
                    src="https://i.ibb.co/47NjXRW/img-avatar3.png"
                    alt=""
                  />
                )}

                <p className="my-auto text-3xl">
                  {user.profile.firstName} {user.profile.lastName}
                </p>
              </div>
            ))}
        </div>

        {/* user Details Section */}

        <div>
          <p className="w-full lg:sticky top-0 shadow-2xl bg-blue-300 text-4xl text-center py-5 rounded-lg font-bold hover:bg-blue-800 hover:text-white">
            USER DETAILS
          </p>

          <div className="lg:sticky top-24">
            <img
              className="w-2/12  rounded-full mx-auto mt-10"
              src={usersdetails.avatar}
              alt="profile"
            />

            {usersdetails?.profile?.username ? (
              <p className="text-xl text-center mt-3 font-semibold">
                @{usersdetails?.profile?.username}
              </p>
            ) : (
              <p className="text-xl text-center mt-3 font-semibold">Data Not Found</p>
            )}


            <div className="w-1/2 mx-auto mt-3">
            {
                usersdetails?.Bio ? 
                <p className="  border-2 border-gray-400 bg-slate-300 p-2 py-5 rounded-md">{usersdetails.Bio}</p>
                :
                <p className=" border-2 border-gray-400 bg-slate-300 p-2 py-5 rounded-md">Data Not Found</p>
            }

            <p className="mt-7 font-semibold">Full Name</p>
            {
                usersdetails?.profile?.firstName ? 
                <p className=" border-2 border-gray-400 bg-slate-300 p-2 py-2 rounded-md" >{usersdetails.profile.firstName} {usersdetails.profile.lastName}</p>
                :
                <p className=" border-2 border-gray-400 bg-slate-300 p-2 py-2 rounded-md">Data Not Found</p>
            }
            

            
            <p className="mt-7 font-semibold">Job Title</p>
            {
                usersdetails?.jobTitle ? 
                <p className=" border-2 border-gray-400 bg-slate-300 p-2 py-2 rounded-md" >{usersdetails.jobTitle}</p>
                :
                <p className=" border-2 border-gray-400 bg-slate-300 p-2 py-2 rounded-md">Data Not Found</p>
            }
            
            <p className="mt-7 font-semibold">Email</p>
            {
                usersdetails?.profile?.email  ? 
                <p className=" border-2 border-gray-400 bg-slate-300 p-2 py-2 rounded-md" >{usersdetails.profile.email}</p>
                :
                <p className=" border-2 border-gray-400 bg-slate-300 p-2 py-2 rounded-md">Data Not Found</p>
            }



            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
