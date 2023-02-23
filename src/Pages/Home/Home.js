import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Home = () => {
  const [usersList, setUsersList] = useState([]);
  const [usersdetails, setUsersDetails] = useState([]);
  const [color, setColor] = useState("11")

  const [loading, setLoading] = useState(true);
  const [loadingtwo, setLoadingTwo] = useState(false);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((user) => {
        setLoading(false);
        setUsersList(user.data);
      });
  }, []);

    console.log(usersList[0]?.avatar);
  //   console.log(usersdetails);



  const handleUser = (id) => {
    setLoadingTwo(true)

    axios
      .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id} `)
      .then((user) => {
        setLoading(false);
        console.log(user.data);
        setUsersDetails(user.data);
        setLoadingTwo(false)
      });
  };

  useEffect(()=>{
    axios
      .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/11`)
      .then((user) => {
        setLoading(false);
        console.log(user.data);
        setUsersDetails(user.data);
      });
  },[])




  if (loading) {
    return <Loading></Loading>;
  }
 

  return (
    <div>
      

      <div className="lg:flex lg:flex-row-reverse  gap-10 mt-10">
       

        {/* user Details Section */}

        <div className=" w-full lg:h-screen lg:overflow-y-auto lg:sticky lg:top-0  ">
          <p className="w-full shadow-current text-white bg-gray-800 text-3xl text-center py-5 rounded-lg font-bold hover:hover:animate-pulse">
            USER DETAILS
          </p>

          <div className="">
          {
            loadingtwo ?
             <p className=" text-center font-semibold text-2xl my-20 flex justify-center text-gray-900">L<p className='w-4 h-4 border-4 mt-3 border-dashed rounded-full animate-spin  border-gray-900'></p>ading...</p>
             :
             <div className="lg:sticky lg:top-28 m-2">
             <img
               className="w-2/12 hover:animate-bounce rounded-full mx-auto mt-8 border-4 border-gray-900"
               src={usersdetails.avatar}
               alt="avatar"
             />
 
             {usersdetails?.profile?.username ? (
               <p className="text-xl text-center mt-3 font-semibold">
                 @{usersdetails?.profile?.username}
               </p>
             ) : (
               <p className="text-xl text-center mt-3 font-semibold">No data to show</p>
             )}
 
 
             <div className="lg:w-2/3  mx-auto mt-3 ">
             {
                 usersdetails?.Bio ? 
                 <p className="hover:animate-pulse text-lg border-2 border-gray-900 bg-gray-800 text-white p-2 py-5 font-semibold rounded-md">{usersdetails.Bio}</p>
                 :
                 <p className="hover:animate-pulse text-lg border-2 border-gray-900 bg-gray-800 text-white p-2 py-5 font-semibold rounded-md">No data to show</p>
             }
 
             <p className="mt-7 text-lg  font-semibold">Full Name</p>
             {
                 usersdetails?.profile?.firstName ? 
                 <p className="hover:animate-pulse text-lg border-2 border-gray-900 bg-gray-800 text-white p-2 py-5 font-semibold rounded-md" >{usersdetails.profile.firstName} {usersdetails.profile.lastName}</p>
                 :
                 <p className="hover:animate-pulse text-lg border-2 border-gray-900 bg-gray-800 text-white p-2 py-5 font-semibold rounded-md">No data to show</p>
             }
             
 
             
             <p className="mt-7 text-lg font-semibold">Job Title</p>
             {
                 usersdetails?.jobTitle ? 
                 <p className="hover:animate-pulse text-lg border-2 border-gray-900 bg-gray-800 text-white p-2 py-5 font-semibold rounded-md" >{usersdetails.jobTitle}</p>
                 :
                 <p className="hover:animate-pulse text-lg border-2 border-gray-900 bg-gray-800 text-white p-2 py-5 font-semibold rounded-md">No data to show</p>
             }
             
             <p className="mt-7 text-lg font-semibold">Email</p>
             {
                 usersdetails?.profile?.email  ? 
                 <p className="hover:animate-pulse text-lg border-2 border-gray-900 bg-gray-800 text-white p-2 py-5 font-semibold rounded-md" >{usersdetails.profile.email}</p>
                 :
                 <p className="hover:animate-pulse text-lg border-2 border-gray-900 bg-gray-800 text-white p-2 py-5 font-semibold rounded-md">No data to show</p>
             }
 
 
 
             </div>
 
 
 
           </div>
          }
          </div>

         
        </div>





         {/* User List Section */}

         <div className="w-full">
          <p className="w-full sticky top-0 shadow-current text-white bg-gray-800 text-3xl text-center py-5 rounded-lg font-bold hover:animate-pulse">
            USER LIST
          </p>

          {usersList?.length &&
            usersList.map((user) => (
              <div 
                className= "item  min-w-fit m-2  shadow-md  border-2 border-gray-600 my-2 rounded-md cursor-pointer "
                key={user.id}
                onClick={(event) =>handleUser(user.id) || setColor(event.target.closest(".item").id)}
              >
                <div id={user.id} className={`flex item ${ color === user.id ? "bg-gray-900   text-white" : "bg-gray-400  border-gray-700 hover:animate-pulse"}`}>
                {
                    user.avatar ? 
                  <img
                    className=" w-2/12 border-2 border-gray-900 m-2  rounded-full"
                    src={user.avatar}
                    alt="avatar"
                  />
                 : (
                  <img
                    className="w-2/12  rounded-full "
                    src="https://i.ibb.co/47NjXRW/img-avatar3.png"
                    alt="avatar"
                  />
                )
                }

                <p className="my-auto text-3xl">
                  {user.profile.firstName} {user.profile.lastName}
                </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
