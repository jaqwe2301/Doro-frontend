import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop" // 페이지 렌더링 시 스크롤 최상단
import { Foot } from "../components/foot";
import { Header } from "../components/header";
import { NotFound } from "../pages/404";
import { CreatePost } from "../pages/createPost";
import { EditPost } from "../pages/editPost";
import { HomePage } from "../pages/home";
import { Post } from "../pages/post";
import { Posts } from "../pages/posts";
import { EditUser } from "../pages/user/editUser";
import { ApplyNewEducation } from "../pages/applyNewEducation";
import { ShowDetailContent } from "../pages/showDetailContent";

import { Walking } from "../pages/educontents/walking";
import { Balancing } from "./../pages/educontents/balancing";
import { BizCool } from "./../pages/educontents/bizCool";
import { Chemical } from "./../pages/educontents/chemical";
import { GameConsole } from "../pages/educontents/gameConsole";
import { GoogleAI } from "./../pages/educontents/googleAI";
import { GoogleEarth } from "./../pages/educontents/googleEarth";
import { GoogleOpen } from "./../pages/educontents/googleOpen";
import { IRcar } from "./../pages/educontents/IRcar";
import { Literacy } from "./../pages/educontents/literacy";
import { Luminol } from "./../pages/educontents/luminol";
import { MoonLight } from "../pages/educontents/moodLight";
import { Pen } from "./../pages/educontents/pen";
import { Printer } from "./../pages/educontents/printer";
import { Pygame } from "./../pages/educontents/pygame";
import { Python } from "./../pages/educontents/python";
import { Speaker } from "./../pages/educontents/speaker";
import { Tinkercad } from "./../pages/educontents/tinkercad";
import { Tracer } from "./../pages/educontents/tracer";
import { Piano } from "../pages/educontents/piano";

export const LoggedInRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/editUser" element={<EditUser />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="/applyNewEducation"
          element={<ApplyNewEducation />}
        ></Route>
        <Route
          path="/showDetailContent"
          element={<ShowDetailContent />}
        ></Route>

        <Route path="/walking" element={<Walking />}></Route>
        <Route path="/balancing" element={<Balancing />}></Route>
        <Route path="/bizcool" element={<BizCool />}></Route>
        <Route path="/chemical" element={<Chemical />}></Route>
        <Route path="/gameconsole" element={<GameConsole />}></Route>
        <Route path="/googleai" element={<GoogleAI />}></Route>
        <Route path="/googleearth" element={<GoogleEarth />}></Route>
        <Route path="/googleopen" element={<GoogleOpen />}></Route>
        <Route path="/ircar" element={<IRcar />}></Route>
        <Route path="/literacy" element={<Literacy />}></Route>
        <Route path="/luminol" element={<Luminol />}></Route>
        <Route path="/moodLight" element={<MoonLight />}></Route>
        <Route path="/pen" element={<Pen />}></Route>
        <Route path="/printer" element={<Printer />}></Route>
        <Route path="/pygame" element={<Pygame />}></Route>
        <Route path="/python" element={<Python />}></Route>
        <Route path="/speaker" element={<Speaker />}></Route>
        <Route path="/tinkercad" element={<Tinkercad />}></Route>
        <Route path="/tracer" element={<Tracer />}></Route>
        <Route path="/piano" element={<Piano />}></Route>
      </Routes>
      <Foot />
    </BrowserRouter>
  );
};
