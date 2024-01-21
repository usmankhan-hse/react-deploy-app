import "./App.css";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Main } from "./Main";
import About from "./About";
import Footer from "./Footer";
import PostPage from "./PostPage";
import NewPost from "./NewPost";

import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";

function App() {
  
  const [posts, setPosts] = useState([    
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);

  // From Post Page handles the delete function and sets news posts array after delete post.
  const handleDelete = (id) => {
    const postDelete = posts.filter((post)=>post.id !== id);
    setPosts(postDelete);
    
  };

  useEffect(()=>
    localStorage.setItem("myPosts", JSON.stringify(posts)), []
  );
  
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Routes>
        <Route path="/" element={<Main posts = {posts} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />}></Route>
        <Route path="/NewPost" element={<NewPost />}></Route>
        

      </Routes>   
      
      <Footer />

    </div>
  );
}

export default App;
