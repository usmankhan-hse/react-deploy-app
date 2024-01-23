import "./App.css";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Main } from "./Main";
import About from "./About";
import Footer from "./Footer";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import Missing from "./Missing";
import {format} from 'date-fns';
import { NewPostConfirm } from "./NewPostConfirm";

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
  const [newPostTitle, setNewPostTitle] = useState("");
  const[newPostBody, setNewPostBody] = useState("");
  const newId = posts.length + 1;
  const newTitle = newPostTitle;
  const newBody = newPostBody;
  const handleAdd = (newPostTitle, newPostBody) =>{
    const newPost = {id: newId, title: newTitle, datetime: format(new Date(), 'MMMM dd, yyyy pp'), body: newBody };
    const newPosts =   [...posts, newPost];
    setPosts(newPosts);
    
  }

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
        <Route path="/NewPost" element={<NewPost handleAdd = {handleAdd} setNewPostTitle={setNewPostTitle} setNewPostBody={setNewPostBody} />}></Route>
        <Route path="/NewPostConfirm" element = {<NewPostConfirm />}></Route>
        <Route path="*" element={<Missing />}></Route>
        

      </Routes>   
      
      <Footer />

    </div>
  );
}

export default App;
