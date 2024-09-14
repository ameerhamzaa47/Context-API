import React from "react";
import './PFirstPageStyle.css'
import Header from "./Header";
import { Button } from "react-bootstrap";

function Menu() {
  return (
    <div>
        <Header/>
      <div className="upper">
        <div className="inner">
            <h1>YOUR FEET</h1>
            <h1>DESERVE</h1>
            <h1>THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio impedit, nobis temporibus voluptatum amet adipisci in veniam saepe debitis. Repellat dignissimos veritatis ipsam repellendus! Laborum error repellat ut et dolore.</p>
            <Button className="btn-danger">Shop Now</Button>
            <Button variant="outline-secondary">Category</Button>
        </div>
        <div className="inner"><img width={'100%'} src="https://runnerz.pk/cdn/shop/files/IMG_3596copy.jpg?v=1715841935" alt="" /></div>
      </div>
    </div>
  )
}

export default Menu
