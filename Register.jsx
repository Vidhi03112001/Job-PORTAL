import {Link} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import {FormRow,Logo} from '../components';


const Register =()=>{
  return( 
  <Wrapper>
    <form className='form'>
      <Logo/>
      <h4>Register</h4>
      <FormRow type='text' name='name' defaultValue='vidhi'/>
      <FormRow type='text' name='lastName' labelText='last name' defaultValue='vidhi'/>
      <FormRow type='text' name='location' defaultValue='bhopal'/>
      <FormRow type='email' name='email' defaultValue='vidhi@gmail.com'/>
      <FormRow type='password' name='password' defaultValue='secret123'/>
      <button type='submit' className='btn btn-block'>submit</button>
      <p>Already a member?
      <Link to='/login' className='member-btn'>Login</Link>
      </p>
    </form>
  </Wrapper>
);
};
// export const Register = () => {
//   return <h1>Register Page</h1>
// }
 export default Register;