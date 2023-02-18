import { render, screen, fireEvent } from '@testing-library/react';
import CommetList from './CommetList'

test("Initial comments / comments are not available ",()=>{
  render(<CommetList allcomments={[]} />)
  const noRecordFound = screen.getByText('No Comments',{exact:false})
  // const noRecordFound = screen.getByText(/No Comments/i)

  expect(noRecordFound).toBeInTheDocument();
})


test("comments available ",()=>{
  const comments=[
    {id:1,name:"Siyaram"},
    {id:2,name:"Arnav"}
  ]
  render(<CommetList allcomments={comments} />)

  const noRecordFound = screen.queryByText('No Comments',{exact:false})//if "queryByText" data will not show still it will not through error. 
  expect(noRecordFound).not.toBeInTheDocument();// this is not available in Comment List
  const commentList=screen.getAllByRole('listitem');
  expect(commentList.length).toBe(comments.length)//toBe primitive value
  // expect(commentList.length).toEqual(2)//toEqual non-primitive value
})