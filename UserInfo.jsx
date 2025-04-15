import React from 'react';

const UserInfo = () => {
  const user = {
    name: "Nguyễn Văn A",
    gender: "Nam",
    email: "nva@gmail.com",
    address: "Thanh Xuân, Hà Nội",
    date: "06/03/2004"
  };

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
     <ul>
        <li>Họ tên: {user.name}</li>
        <li>Giới tính: {user.gender}</li>
        <li>Email: {user.email}</li>
        <li>Địa chỉ: {user.address}</li>
        <li>SĐT: {user.date}</li>
     </ul>
    </div>
  );
};

export default UserInfo;
