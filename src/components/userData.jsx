import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../slice/userSlice";

const UserData = () => {
  const [page, setPage] = useState(1);
  const userList = useSelector(state => state.user.userData);

  const dispatch = useDispatch();

  const removeListItem = id => {
    dispatch(removeUser({ id }));
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(userList.length / itemsPerPage);

  const goToNextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="h-full overflow-x-auto">
        <table className="w-full h-full table-auto">
          <thead className="bg-[#374151]">
            <tr className="border border-gray-500 border-t-0 border-l-0 border-r-0">
              <th className="py-4 px-2 font-semibold text-gray-400 xl:text-sm text-xs uppercase">
                Name
              </th>
              <th className="py-4 px-2 font-semibold text-gray-400 xl:text-sm text-xs uppercase">
                Position
              </th>
              <th className="py-4 px-2 hidden xl:table-cell font-semibold text-gray-400 xl:text-sm text-xs uppercase">
                Country
              </th>
              <th className="py-4 px-2 font-semibold text-gray-400 xl:text-sm text-xs uppercase">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {userList.slice((page - 1) * 10, (page - 1) * 10 + 10).map(i => (
              <tr
                className="border border-gray-700 border-t-0 border-l-0 border-r-0 hover:bg-[#374151]"
                key={i.id}
              >
                <td className="py-4 px-2 text-center text-white text-sm xl:text-lg">
                  {i.name}
                </td>
                <td className="py-4 px-2 text-center text-white text-sm xl:text-lg">
                  <span className="block lg:hidden">
                    {i.position.length > 10
                      ? `${i.position.slice(0, 12)}...`
                      : i.position}
                  </span>
                  <span className="hidden lg:block text-white">
                    {i.position}
                  </span>
                </td>
                <td className="py-4 px-2 text-center hidden xl:table-cell text-white text-sm xl:text-lg">
                  {i.country}
                </td>
                <td className="py-4 px-2 text-center text-sm xl:text-lg">
                  {i.status === "Online" ? (
                    <span className="text-green-500">Online</span>
                  ) : (
                    <span className="text-red-500">Offline</span>
                  )}
                  <button onClick={() => removeListItem(i.id)} className="ml-2">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={page === 1}
          className={`px-4 py-2 mr-6 ${
            page === 1
              ? "opacity-50 cursor-not-allowed"
              : "bg-blue-500 text-white"
          } rounded`}
        >
          ◀️
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 ml-6 ${
            page === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "bg-blue-500 text-white"
          } rounded`}
        >
          ▶️
        </button>
      </div>
    </>
  );
};

export default UserData;
