// 페이지 렌더링 시 스크롤 상단으로 이동하게 만드는 컴포넌트
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}