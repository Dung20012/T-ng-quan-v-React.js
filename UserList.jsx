// src/components/UserList.jsx

import React from 'react';

const UserList = () => {
  const users = [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      dateOfBirth: "02-02-2002",
      gender: "Nam",
      address: "Hà Nội"
    },
    {
      id: 2,
      userName: "Nguyễn Thị A",
      dateOfBirth: "03-03-2003",
      gender: "Nữ",
      address: "TP.HCM"
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách người dùng</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Họ và tên</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Ngày sinh</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Giới tính</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Địa chỉ</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.userName}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.dateOfBirth}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.gender}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.address}</td>
              <button>Sửa</button> <button>Xóa</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
