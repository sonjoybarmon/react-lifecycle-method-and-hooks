import { useContext } from "react";
import { ButtonGroup, Button, Card } from "react-bootstrap";
import { AuthContext } from "../ContextApi/AuthContext";
import { ThemeContext } from "../ContextApi/ThemeContext";
import Layout from "../Layout";

const TodoList = () => {
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(
    ThemeContext
  );
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <Layout>
      <div
        style={{
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            padding: "30px",
            width: "500px",
            background: theme.background,
            color: theme.text,
          }}
        >
          <h2>Work List</h2>
          <div className="my-3">
            <ButtonGroup aria-label="Basic example" style={{ width: "100%" }}>
              <Button variant="secondary w-33">Overview</Button>
              <Button variant="secondary w-33">Contact</Button>
              <Button variant="secondary w-33">Support</Button>
            </ButtonGroup>
          </div>

          <div>
            <p>1st work item</p>
            <p>2nd work item</p>
            <p>3rd work item</p>
            <p>4th work item</p>
          </div>
          <Button variant="secondary" onClick={changeTheme}>
            Change Theme
          </Button>
          <Button
            className="mt-3"
            variant="secondary"
            onClick={changeAuthStatus}
          >
            {isLoggedIn ? "Login" : "Logout"}
          </Button>
        </Card>
      </div>
    </Layout>
  );
};

export default TodoList;

// use class base components

// import { Component } from "react";
// import { ButtonGroup, Button, Card } from "react-bootstrap";
// import { ThemeContext } from "../ContextApi/ThemeContext";
// import Layout from "../Layout";

// export class TodoListConsumer extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme, lightTheme, darkTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <Layout>
//         <div
//           style={{
//             height: "600px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Card
//             style={{
//               padding: "30px",
//               width: "500px",
//               background: theme.background,
//               color: theme.text,
//             }}
//           >
//             <h2>Work List</h2>
//             <div className="my-3">
//               <ButtonGroup aria-label="Basic example" style={{ width: "100%" }}>
//                 <Button variant="secondary w-33">Overview</Button>
//                 <Button variant="secondary w-33">Contact</Button>
//                 <Button variant="secondary w-33">Support</Button>
//               </ButtonGroup>
//             </div>

//             <div>
//               <p>1st work item</p>
//               <p>2nd work item</p>
//               <p>3rd work item</p>
//               <p>4th work item</p>
//             </div>
//           </Card>
//         </div>
//       </Layout>
//     );
//   }
// }
