import React from 'react';
import '../styles/pages.css';
import '../styles/Notice.css';
export default function Notice() {

  fetch("http://localhost:8080")
  .then((response) => response.json())
  .then((data) => console.log(data));
  return (
  <div className='middle-page'>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2022년 3월 25일</td>
          <td>공지</td>
          <td>과제 2022년 3월 27일까지 제출</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}