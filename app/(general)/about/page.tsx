import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abaut Page",
  description: "Descipción About Page",
};

export default function AboutPage(){
  return (
    <span className="text-5xl capitalize" >About page</span>
  )
}
