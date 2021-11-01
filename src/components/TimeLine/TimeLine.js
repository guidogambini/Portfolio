import React from "react";
import { Chrono } from "react-chrono";
import './TimeLine.css';


export default function TimeLine() {


    const data = [
        {
          title: "December 2016",
          contentTitle: "Journalism",
          where: "TEA",
          link: "https://www.teaydeportea.edu.ar/",
          hat: '🎓'
        },
        {
          title: "April 2018 - October 2019",
          contentTitle: "Content creator and web editor",
          where: "Olé",
          link: 'https://www.ole.com.ar/autor/guido-gambini.html',
          hat: '👨🏼‍💼'
        },
        {
          title: "March 2020",
          contentTitle: "Degree in Communication Science",
          where: "UADE",
          link: 'https://www.uade.edu.ar/',
          hat: '🎓'
        },
        {
          title: "November 2020",
          contentTitle: "Data Science",
          where: "Acámica",
          link: 'https://www.acamica.com/',
          hat: '🎓'
        },
        {
          title: "March 2021",
          contentTitle: "Degree in Political Science",
          where: "USAL",
          link: 'http://www.usal.edu.ar/usal_carreras-grado',
          hat: '🎓'
        },
        {
          title: "October 2021",
          contentTitle: "Web Full-Stack Development",
          where: "Henry",
          link: 'https://certificates.soyhenry.com/cert?id=ed87b686-5aab-46cb-b494-8d7b716bef8c',
          hat: '🎓'
        },
        {
          title: "August 2021 - October 2021",
          contentTitle: "Teaching Assistance",
          where: "Henry",
          link: 'https://www.soyhenry.com/',
          hat: '👨🏼‍💼'
        }
      ];

  return (
    <div className="timeline">
      
        {

            data && data.map(element => 
                      <ul className='unordered'>
                            <li className='hat'>{element.hat}</li>
                            <li className='tit'>{element.title}</li>
                            <li className='subtit'>{element.contentTitle}</li>
                            <li className='where'><a href={element.link} target='_blank' className='whereLink'>{element.where}</a></li>
                      </ul>
                    
            )

        }
      
    </div>
  );

}