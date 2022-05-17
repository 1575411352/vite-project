import { Link,Outlet } from "react-router-dom";
export default function About() {
  return (
  <div style={{color:'green'}}>
      <div>我是关于页面</div>
      <ul>
				<li>
					<Link to="/about/about1">查看about1</Link>
				</li>
				<li>
					<Link to="/about/about2">查看about2</Link>
				</li>
			</ul>
      <Outlet/>
  </div>)
}