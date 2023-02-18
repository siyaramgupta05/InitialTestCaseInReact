import { render, screen, fireEvent } from '@testing-library/react';
import CommentForm from './CommentForm';
import userEvent from '@testing-library/user-event'

test('will button dissabled while input field will blank',()=>{
  render(<CommentForm/>)
  const h2text=screen.getByText('comment form',{exact:false});//"getByText" means definetelly text will persent. 
  const inputCommentPlaceholder=screen.getByRole('textbox');
  const inputTermAndConditions=screen.getByLabelText('I agree to terms and conditions',{exact:false});
  const button=screen.getByRole('button',{name:'comment'});
  expect(h2text).toBeInTheDocument();
  fireEvent.change(inputCommentPlaceholder,{target:{value:''}})//input filled form
  expect(inputCommentPlaceholder).toBeInTheDocument();
  expect(inputTermAndConditions).toBeInTheDocument();
  expect(screen.getByText('Comment Required')).not.toBeVisible()
  expect(screen.getByText('Terms and Conditions Required')).not.toBeVisible()
  // expect(screen.getByText('Comment Required')).toBeVisible()
  // expect(screen.findByText('Comment Required')).toBeVisible()

  expect(button).toBeDisabled();
  screen.debug()
});
it('Enable submit button after filled form ',()=>{
  render(<CommentForm/>)
  const inputCommentPlaceholder=screen.getByPlaceholderText('write your comment here',{exact:false});
  const inputTermAndConditions=screen.getByLabelText('I agree to terms and conditions',{exact:false});
  const button=screen.getByRole('button',{name:'comment',exact:false});
  // fireEvent.change(inputCommentPlaceholder,{target:{value:''}})//input emptay value get form
  // expect(inputCommentPlaceholder.value).toBe('')
  fireEvent.change(inputCommentPlaceholder,{target:{value:'something'}})//input filled form
  fireEvent.click(inputTermAndConditions)
  expect(button).toBeEnabled()
screen.debug()
fireEvent.change(inputCommentPlaceholder,{target:{value:''}})//input filled form  
fireEvent.click(inputTermAndConditions)
  expect(button).toBeDisabled()
  expect(screen.getByText('Comment Required')).toBeVisible()//error message 
  expect(screen.getByText('Terms and Conditions Required')).toBeVisible()
})

// used "userEvent" instead of "fireEvent"
it('Enable submit button after filled form ', async()=>{
  render(<CommentForm/>)
  const inputCommentPlaceholder=screen.getByPlaceholderText('write your comment here',{exact:false});
  const inputTermAndConditions=screen.getByLabelText('I agree to terms and conditions',{exact:false});
  const button=screen.getByRole('button',{name:'comment',exact:false});
  
  await userEvent.type(inputCommentPlaceholder,'something')//input filled form
  await userEvent.click(inputTermAndConditions)
    
  expect(button).toBeEnabled()

  await userEvent.click(inputTermAndConditions)
  expect(button).toBeDisabled()
})
