import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const storeUser = useSelector((ele) => ele.user);
  const history = useNavigate();
  console.log(storeUser);
  const token = sessionStorage.getItem('token');

  const handlelogout = () => {
    sessionStorage.removeItem('token');
    history('/auth/login');
  };
  return (
    <div className='nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      {storeUser.length != 0 &&
        storeUser.map((ele, id) => {
          return (
            <>
              <div className='flex justify-between items-center'>
                <p className='font-semibold text-lg dark:text-gray-200'>
                  User Profile
                </p>
                <Button
                  icon={<MdOutlineCancel />}
                  color='rgb(153, 171, 180)'
                  bgHoverColor='light-gray'
                  size='2xl'
                  borderRadius='50%'
                />
              </div>
              <div className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'>
                <img
                  className='rounded-full h-24 w-24'
                  src={avatar}
                  alt='user-profile'
                />
                <div>
                  <p className='font-semibold text-xl dark:text-gray-200'>
                    {' '}
                    {ele.fname + ' ' + ele.lname}
                  </p>
                  <p className='text-gray-500 text-sm dark:text-gray-400'>
                    {' '}
                    Administrator{' '}
                  </p>
                  <p className='text-gray-500 text-sm font-semibold dark:text-gray-400'>
                    {' '}
                    {ele.email}
                  </p>
                </div>
              </div>
              <div></div>
              <div className='mt-5'>
                {token == null || token == undefined ? (
                  // <Button
                  //   color='white'
                  //   bgColor={currentColor}
                  //   text='Logout'
                  //   borderRadius='10px'
                  //   width='full'
                  // />
                  <button
                    onClick={() => history('/auth/login')}
                    className='w w-1/2 bg-teal-300 rounded-md m-auto p-3'
                  >
                    login
                  </button>
                ) : (
                  // <Button
                  //   color='white'
                  //   bgColor={currentColor}
                  //   text='Logout'
                  //   borderRadius='10px'
                  //   width='full'
                  // />
                  <button
                    onClick={() => handlelogout()}
                    className='w w-1/2 bg-teal-300 rounded-md m-auto p-3'
                  >
                    Logout
                  </button>
                )}
              </div>
            </>
          );
        })}
    </div>
  );
};

export default UserProfile;
