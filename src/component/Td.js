import React from "react";

const Td = ({item, handleRemove, handleEdit}) => {
  const onRemove = () => {
    handleRemove(item.id)
  }

  const onEdit = () => {
    handleEdit(item);
  }

  return (
    <>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.website}</td>
        <td onClick={onEdit}><button>수정</button></td>
        <td onClick={onRemove}><button>삭제</button></td>
      </tr>
    </>
  )

};
export default Td;