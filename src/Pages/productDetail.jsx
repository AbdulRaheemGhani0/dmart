

//   return (
//   <>
//   <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
  
//       label="Email"
//       name="Email"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your email!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
   
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName="checked"
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
    
//     <h1>OR</h1>

//     <Button   onClick={handleSignInWithGoogle} type="primary" 
//     // htmlType="submit"
//     >
//         Signin with Google
//       </Button>
//     </Form.Item>
//   </Form></>
// )};
// export default LoginForm;

// const LoginForm  =()=> { 

  
  

//   };
//   const onFinish = (values) => {
//   console.log('Success:', values);
//   console.log(values.Email)
//   console.log(values.password)


// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };
  