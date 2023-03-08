import React,{useState,useEffect}  from 'react';
import './ServiceBlock.scss';
import { ServiceBox } from './ServiceBox';
import DesignIcon from '../../assets/images/icon1.svg';
import ArchitectureIcon from '../../assets/images/icon2.svg';
import PlanningIcon from '../../assets/images/icon3.svg';

const array = [
  {
    title: "Interior 1",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: DesignIcon,
    filter: "interior"
  },
  {
    title: "Interior 2",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: DesignIcon,
    filter: "interior"
  },
  {
    title: "Interior 3",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: DesignIcon,
    filter: "interior"
  },
  {
    title: "Interior 4",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: DesignIcon,
    filter: "interior"
  },
  {
    title: "Interior 5",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: DesignIcon,
    filter: "interior"
  },
  {
    title: "Architecture 1",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: ArchitectureIcon,
    filter: "architecture"
  },
  {
    title: "Architecture 2",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: ArchitectureIcon,
    filter: "architecture"
  },
  {
    title: "Architecture 3",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: ArchitectureIcon,
    filter: "architecture"
  },
  {
    title: "Architecture 4",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: ArchitectureIcon,
    filter: "architecture"
  },
  {
    title: "Architecture 5",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: ArchitectureIcon,
    filter: "architecture"
  },
  {
    title: "Planning 1",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: PlanningIcon,
    filter: "planning"
  },
  {
    title: "Planning 2",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: PlanningIcon,
    filter: "planning"
  },
  {
    title: "Planning 3",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: PlanningIcon,
    filter: "planning"
  },
  {
    title: "Planning 4",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: PlanningIcon,
    filter: "planning"
  },
  {
    title: "Planning 5",
    description: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
    img: PlanningIcon,
    filter: "planning"
  },
]

export const ServiceBlock = () => {
  
  const [servicesArray, setServicesArray] = useState([])
  const [active, setActive] = useState("all")

  const filterServices = (filter) =>{
    let res = []
    if(filter === "all"){
      let arr1 = array.filter((item)=> item.filter === "interior")
      let arr2 = array.filter((item)=> item.filter === "architecture")
      let arr3 = array.filter((item)=> item.filter === "planning")
      res.push(arr1[arr1.length-1])
      res.push(arr2[arr2.length-1])
      res.push(arr3[arr3.length-1])
  
      setServicesArray(res)
      setActive(filter)
      return
    }
    res = array.filter((item)=> item.filter === filter)
    setServicesArray(res)
    setActive(filter)
  }

  useEffect(() => {
    filterServices('all')
  }, [])
  
  return (
    <div id="services" className="service__container">
        <h5 className="service__subtitle">WHAT WE DO</h5>
        <h1 className="service__title">Our Service</h1>
        <div className="service__filter">
            <a onClick={()=>filterServices("all")} className={`service__filter-item ${active === "all" ? "active": ""}`}>ALL</a>
            <a onClick={()=>filterServices("interior")} className={`service__filter-item ${active === "interior" ? "active": ""}`}>INTERIOR DESIGN</a>
            <a onClick={()=>filterServices("architecture")} className={`service__filter-item ${active === "architecture" ? "active": ""}`}>ARCHITECTURE</a>
            <a onClick={()=>filterServices("planning")} className={`service__filter-item ${active === "planning" ? "active": ""}`}>PLANNING</a>
        </div>
        <div className="service__directions">
          {servicesArray?.map((item,index)=>(
            <ServiceBox key={index} filter={item.filter} icon={item.img} title={item.title} description={item.description} />
          ))}
        </div>
    </div>
  )
}
