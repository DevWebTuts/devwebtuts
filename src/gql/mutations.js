export default {
  createUser: `mutation CreateUser($email: String!, $password: String!, $firstName: String, $middleName: String, $lastName: String, $image: String) {
  user: createUser(authProvider: {email: {email: $email, password: $password}}, firstName: $firstName, middleName: $middleName, lastName: $lastName, image: $image) {
    id
    email
  }
}`,
  signInUser: `mutation SignInUser($email: String!, $password: String!) {
  user: signinUser(email: {email: $email, password: $password}) {
    token
    user {
      email
      image
      id
    }
  }
}`,
  createArticle: `mutation AddArticle($url: String!, $title: String!, $image: String, $body: String) {
  article: createArticle(url: $url, title: $title, image: $image, body: $body) {
    url
    id
    title
    image
    body
  }
}`
}