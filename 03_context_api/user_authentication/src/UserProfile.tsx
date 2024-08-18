import { useAuth } from './hooks/useAuth'

const UserProfile = (): JSX.Element => {

    const {loggedInUser} = useAuth();

  return (
    <>
      <h1>User Profile</h1>
      <p>This is the user profile page</p>
      <p>Logged in as {loggedInUser}</p>
    </>
  )
}

export default UserProfile;