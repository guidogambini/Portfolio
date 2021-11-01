import React from "react";
import { Chrono } from "react-chrono";
import './TimeLine.css';


export default function TimeLine() {


    const data = [
        {
          title: "December 2016",
          contentTitle: "Journalism 🎓",
          where: "TEA",
          link: "https://www.teaydeportea.edu.ar/"
        },
        {
          title: "April 2018 - October 2019",
          contentTitle: "Digital editor 🖋",
          where: "Diario Olé",
          link: 'https://www.ole.com.ar/autor/guido-gambini.html'
        },
        {
          title: "March 2020",
          contentTitle: "Degree in Communication Science 🎓",
          where: "UADE",
          link: 'https://www.uade.edu.ar/'
        },
        {
          title: "November 2020",
          contentTitle: "Data Science 🎓",
          where: "Acámica",
          link: 'https://www.acamica.com/'
        },
        {
          title: "March 2021",
          contentTitle: "Degree in Political Science 🎓",
          where: "USAL",
          link: 'http://www.usal.edu.ar/usal_carreras-grado'
        },
        {
          title: "October 2021",
          contentTitle: "Web Full-Stack Development 🎓",
          where: "Henry",
          link: 'https://www.soyhenry.com/'
        },
        {
          title: "August 2021 - October 2021",
          contentTitle: "Teaching Assistant 👨🏼‍🏫",
          where: "Henry",
          link: 'https://www.soyhenry.com/'
        }
      ];

  return (
    <div className="timeline">
      
        {

            data && data.map(element => 
                      <ul className='unordered'>
                            <li className='tit'>{element.title}</li>
                            <li className='subtit'>{element.contentTitle}</li>
                            <li className='where'><a href={element.link} target='_blank' className='whereLink'>{element.where}</a></li>
                      </ul>
                    
            )

        }
      
    </div>
  );

}