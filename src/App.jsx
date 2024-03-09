import styled from "styled-components";

function App() {
  const Logo = styled.p`
    font-size: 1.2rem;
  `;
  const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <>
      <Header>
        <Logo>login to get started</Logo>
        <a href="#">login</a>
      </Header>
      <main>
        <h1>
          Empower Your Productivity with Task Manager: Stay Organized, Stay
          Ahead!
        </h1>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
