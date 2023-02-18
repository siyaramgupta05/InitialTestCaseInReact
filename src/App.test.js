import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('First Comments Display after submited', async() => {
  render(<App />);
  const inputCommentPlaceholder=screen.getByPlaceholderText('write your comment here',{exact:false});
  const inputTermAndConditions=screen.getByLabelText('I agree to terms and conditions',{exact:false});
  const button=screen.getByRole('button',{name:'comment',exact:false});
 
  await userEvent.type(inputCommentPlaceholder,'new comment value 3')//new comment write here
  // fireEvent.change(inputCommentPlaceholder,{target:{value:'nice pic'}})//new comment write here

  await userEvent.click(inputTermAndConditions);
  await userEvent.click(button);//for submit form
  // expect(button).toBeEnabled();

  // await userEvent.click(inputTermAndConditions)
  // expect(button).toBeDisabled()
  // const newCommentListAndShowRecord = screen.getAllByRole('listitem')
  const newCommentListAndShowRecord = await screen.findAllByRole('listitem')
    // const newCommentListAndShowRecord = await screen.findByText(/new comment value 3/i)
    // const newCommentListAndShowRecord = screen.getByText(/new comment value 3/i)
    // const newCommentListAndShowRecord = screen.getByText('new comment value',{exact:false})
    screen.debug()
    // expect(newCommentListAndShowRecord).toBeInTheDocument()
  expect(newCommentListAndShowRecord.length).toBe(1)

});

test('Second Comments Display after submited. its not override existing comments', async() => {
  render(<App />);
  const inputCommentPlaceholder1=screen.getByPlaceholderText('write your comment here',{exact:false});
  const inputTermAndConditions1=screen.getByLabelText('I agree to terms and conditions',{exact:false});
  const button1=screen.getByRole('button',{name:'comment',exact:false});
 
  await userEvent.type(inputCommentPlaceholder1,'new comment value')//input filled form
  await userEvent.click(inputTermAndConditions1)
  await userEvent.click(button1)
  // expect(button).toBeEnabled()
  await userEvent.clear(inputCommentPlaceholder1)//for clear input value
  await userEvent.type(inputCommentPlaceholder1,'new comment value1')//input filled form
  await userEvent.click(button1)
  

  // await userEvent.click(inputTermAndConditions1)
  // expect(button).toBeDisabled()

  // const newCommentListAndShowRecord1 = screen.getAllByRole('listitem')
  // const newCommentListAndShowRecord1 = await screen.findAllByRole('listitem')

 await waitFor(()=>{
    const newCommentListAndShowRecord1 = screen.getAllByRole('listitem')
  expect(newCommentListAndShowRecord1.length).toBe(2)

  })
  // expect(newCommentListAndShowRecord1.length).toBe(2)
  
  // screen.debug()

});




// test('input test case',()=>{
//   render(<App />)
//   const inputUserName = screen.getByText(/Username/i)
//   const inputPassword = screen.getByText(/Password/i)
//   expect(inputUserName).toBeInTheDocument()
//   expect(inputPassword).toBeInTheDocument()
// });

// test('input test button',()=>{
//   render(<App />)
//   const inputButton = screen.getByRole('button')
//   expect(inputButton).toBeInTheDocument()
// })

// test('input test button Disabled',()=>{
//   render(<App />)
//   const inputButtonDisabled = screen.getByRole('button')
//   expect(inputButtonDisabled).toBeDisabled()
//   // const inputButtonDisabled = screen.getByRole('button',{name:'Submit',exact:false})
//   // expect(inputButtonDisabled).toBeDisabled()
// })
